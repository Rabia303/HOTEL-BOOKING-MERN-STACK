const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

// Import Models
const Room = require("./models/AdminAddRoom");
const userContact = require("./models/UserContact");
const RoomBooking = require("./models/RoomBooking"); 
const UserBooking = require("./models/Booking"); 
const authMiddleware = require("./middleware/authMiddleware");
const Setting = require("./models/AdminAddSetting");
const MaintenanceRequest = require("./models/AdminAddMaintenanceRequest");
const AddNewUser = require('./models/AdminAddUser');
const Staff = require('./models/AdminAddNewStaff'); 
const Housekeeping = require('./models/Housekeeping');
const AddUser = require('./models/User');
//login 
const jwt = require("jsonwebtoken"); // npm install jsonwebtoken
const bcrypt = require("bcryptjs");// npm install bcryptjs


// Initialize Express App
const app = express();

// Ensure 'uploads' folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve images statically
app.use("/uploads", express.static("uploads"));

// Database Connection
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/hoteldata", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}
main();

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
// Room Management Route
app.post("/api/addrooms", upload.single("roomImage"), async (req, res) => {
  try {
    const roomData = {
      roomName: req.body.roomName,
      roomDescription: req.body.roomDescription,
      overview: req.body.overview,
      roomSize: req.body.roomSize,
      occupancy: req.body.occupancy,
      view: req.body.view,
      smokingAllowed: req.body.smokingAllowed === "true",
      bedSize: req.body.bedSize,
      location: req.body.location,
      roomService: req.body.roomService === "true",
      swimmingPool: req.body.swimmingPool === "true",
      roomType: req.body.roomType, // Added roomType field
      roomImage: req.file ? `/uploads/${req.file.filename}` : null,
    };

    const newRoom = new Room(roomData);
    await newRoom.save();
    res.status(201).json({ message: "Room added successfully!", room: newRoom });
  } catch (err) {
    console.error("Error adding room:", err);
    res.status(500).json({ message: "Error adding room.", error: err });
  }
});


//fetch all rooms
app.get("/fetchroom", async (req, res) => {
  try {
    const fetchroom = await Room.find();
    res.status(200).json(fetchroom);
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({ message: "Error fetching rooms", error });
  }
});


//for admin fetch rooms
// Fetch all rooms
app.get("/api/rooms", async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({ message: "Error fetching rooms", error });
  }
});

// Edit (Update) a Room
app.put("/api/rooms/:id", async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRoom) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json({ message: "Room updated successfully", room: updatedRoom });
  } catch (error) {
    console.error("Error updating room:", error);
    res.status(500).json({ message: "Error updating room", error });
  }
});

//  Delete a Room
app.delete("/api/rooms/:id", async (req, res) => {
  try {
    const deletedRoom = await Room.findByIdAndDelete(req.params.id);
    if (!deletedRoom) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json({ message: "Room deleted successfully" });
  } catch (error) {
    console.error("Error deleting room:", error);
    res.status(500).json({ message: "Error deleting room", error });
  }
});


// Routes

app.post("/userbooking", async (req, res) => {
  console.log("Received Data", req.body);
  const { name, email, checkInDate, checkOutDate, members } = req.body;
  const newBooking = new userBooking({ name, email, checkInDate, checkOutDate, members });

  const savebooking = await newBooking.save();
  console.log("Booking Saved:", savebooking);
  res.status(201).json(savebooking);
});

app.post('/addUser', async (req, res) => {
  try {
    const newUser = new AddNewUser(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Error adding user", error });
  }
});

// Fetch all users
app.get('/users', async (req, res) => {
  try {
    const users = await AddNewUser.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users", error });
  }
});



// Prevent multiple settings creation, update if exists
app.post('/settings', async (req, res) => {
  try {
    const existingSetting = await Setting.findOne();
    if (existingSetting) {
      return res.status(400).json({ message: "Settings already exist. Please edit in View Settings." });
    }

    const newSetting = new Setting(req.body);
    await newSetting.save();
    res.status(201).json({ message: "Settings saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error processing settings", error });
  }
});

// Update settings
app.put('/settings/:id', async (req, res) => {
  try {
    const updatedSetting = await Setting.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSetting) {
      return res.status(404).json({ message: "Settings not found." });
    }
    res.status(200).json({ message: "Settings updated successfully!", settings: updatedSetting });
  } catch (error) {
    res.status(500).json({ message: "Error updating settings", error });
  }
});

// Fetch settings
app.get('/settings', async (req, res) => {
  try {
    const settings = await Setting.find();
    res.status(200).json(settings);
  } catch (error) {
    console.error("Error fetching settings:", error);
    res.status(500).json({ message: "Error fetching settings", error });
  }
});


// Fetch maintenance requests
app.get('/maintenance', async (req, res) => {
  console.log("Fetching maintenance requests..."); // Log when the route is accessed
  try {
    const requests = await MaintenanceRequest.find();
    res.status(200).json(requests);
  } catch (error) {
    console.error("Error fetching maintenance requests:", error);
    res.status(500).json({ message: "Error fetching maintenance requests", error });
  }
});

app.get('/ViewMaintenanceRequests', async (req, res) => {
  try {
    const requests = await MaintenanceRequest.find(); // Fetch all maintenance requests
    res.status(200).json(requests); // Send the requests as a JSON response
  } catch (error) {
    console.error("Error fetching maintenance requests:", error);
    res.status(500).json({ message: "Error fetching maintenance requests", error });
  }
});



//ad staff
app.post('/addStaff', async (req, res) => {
  try {
    const newStaff = new Staff(req.body);
    const savedStaff = await newStaff.save();
    res.status(201).json(savedStaff);
  } catch (error) {
    console.error("Error adding staff:", error);
    res.status(500).json({ message: "Error adding staff", error });
  }
});

// Fetch all staff
app.get('/staff', async (req, res) => {
  try {
    const staff = await Staff.find();
    res.status(200).json(staff);
  } catch (error) {
    console.error("Error fetching staff:", error);
    res.status(500).json({ message: "Error fetching staff", error });
  }
});

//insert housekeeping
app.post('/addRoom', async (req, res) => {
  try {
    const { roomNumber, status, lastCleaned, nextCleaning, maintenanceIssue } = req.body;

    // Check if the room already exists
    const existingRoom = await Housekeeping.findOne({ roomNumber });
    if (existingRoom) {
      return res.status(400).json({ message: "Room already exists" });
    }

    // Create new room with all required fields
    const newRoom = new Housekeeping({
      roomNumber,
      status: status || "Clean", // Default to "Clean" if status is not provided
      lastCleaned: lastCleaned || new Date().toLocaleString(), // Default to current date/time
      nextCleaning: nextCleaning || "Not scheduled", // Ensure nextCleaning is stored
      maintenanceIssue: maintenanceIssue || "", // Ensure maintenance issue is stored
    });

    // Save the new room
    const savedRoom = await newRoom.save();
    res.status(201).json(savedRoom);
  } catch (error) {
    console.error("Error adding room:", error);
    res.status(500).json({ message: "Error adding room", error });
  }
});

// Fetch all rooms
app.get('/rooms', async (req, res) => {
  try {
    const rooms = await Housekeeping.find();
    res.status(200).json(rooms);
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({ message: "Error fetching rooms", error });
  }
});
app.put('/updateMaintenance/:id', async (req, res) => {
  try {
    const { maintenanceIssue } = req.body;

    if (!maintenanceIssue) {
      return res.status(400).json({ message: "Maintenance issue is required" });
    }

    const updatedRoom = await Housekeeping.findByIdAndUpdate(
      req.params.id,
      { maintenanceIssue, status: "Maintenance Needed" },
      { new: true }
    );

    if (!updatedRoom) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.status(200).json(updatedRoom);
  } catch (error) {
    console.error("Error updating maintenance issue:", error);
    res.status(500).json({ message: "Error updating maintenance issue" });
  }
});
app.put('/updateNextCleaning/:id', async (req, res) => {
  try {
    const { nextCleaning } = req.body;

    if (!nextCleaning) {
      return res.status(400).json({ message: "Next cleaning date is required" });
    }

    const updatedRoom = await Housekeeping.findByIdAndUpdate(
      req.params.id,
      { nextCleaning },
      { new: true }
    );

    if (!updatedRoom) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.status(200).json(updatedRoom);
  } catch (error) {
    console.error("Error updating next cleaning date:", error);
    res.status(500).json({ message: "Error updating next cleaning date" });
  }
});

app.put('/updateRoomStatus/:id', async (req, res) => {
  try {
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: "Status is required" });
    }

    const updatedRoom = await Housekeeping.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedRoom) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.status(200).json(updatedRoom);
  } catch (error) {
    console.error("Error updating room status:", error);
    res.status(500).json({ message: "Error updating room status" });
  }
});

// Add Contact
app.post("/usercontact", async (req, res) => {
  const { name, email, content } = req.body;
  const newContact = new userContact({ name, email, content });

  const saveuser = await newContact.save();
  res.status(201).json(saveuser);
});

// Fetch contacts
app.get("/contact", async (req, res) => {
  const contacts = await userContact.find();
  res.status(200).json(contacts);
});

// Route to handle room booking
app.post("/api/book-room", async (req, res) => {
  try {
    const { userId, roomId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID is missing." });
    }

    const user = await AddUser.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: "Room not found." });
    }

    const newBooking = new RoomBooking({ userId, roomId, ...req.body });
    await newBooking.save();

    res.status(201).json({ message: "Booking successful", bookingId: newBooking._id });
  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({ message: "Booking failed, please try again." });
  }
});


// Route to get a specific booking by ID (for confirmation page)
app.get("/api/booking/:id", async (req, res) => {
  try {
    const booking = await RoomBooking.findById(req.params.id).populate("roomId").populate("userId");
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error("Error fetching booking:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Route to fetch all bookings (for admin or user history)
app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await RoomBooking.find()
      .populate("roomId")
      .populate("userId");
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Server error" });
  }
});
app.put("/api/bookings/:id/status", async (req, res) => {
  try {
    const { status } = req.body; 

    const updatedBooking = await RoomBooking.findByIdAndUpdate(
      req.params.id,
      { status }, 
      { new: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Status updated successfully", booking: updatedBooking });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ message: "Server error" });
  }
});
const updateStatus = async (bookingId) => {
  try {
    await axios.put(`http://localhost:3000/api/bookings/${bookingId}/status`, { status: "Paid" });
    fetchBookings(); // Refresh data after updating
  } catch (error) {
    console.error("Error updating status:", error);
  }
};

///login 

//register 

// Register route for admin
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await AddNewUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new AddNewUser({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Error during registration", error });
  }
});


// Login route for admin
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await AddNewUser.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, "your-secret-key", {
      expiresIn: "1h", // Token expires in 1 hour
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Error during login", error });
  }
});

//LoginUser and RegisterUser routes

app.post("/registerUser", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await AddUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new AddUser({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Error during registration", error });
  }
});


// Login route for User
app.post("/loginUser", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await AddUser.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });

    res.status(200).json({ token, userId: user._id }); // Ensure userId is returned
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Error during login", error });
  }
});


//logout User Route

app.post("/logoutUser", (req, res) => {
  res.json({ message: "User logged out successfully" });
});


//maintainance form 
app.post('/maintenance', async (req, res) => {
  try {
    const { roomNumber, issueDescription, priorityLevel } = req.body;

    if (!roomNumber || !issueDescription || !priorityLevel) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newRequest = new MaintenanceRequest({
      roomNumber,
      issueDescription,
      priorityLevel
    });

    const savedRequest = await newRequest.save();
    res.status(201).json(savedRequest);
  } catch (error) {
    console.error("Error adding maintenance request:", error);
    res.status(500).json({ message: "Error adding maintenance request", error });
  }
});

app.get('/maintenance', async (req, res) => {
  try {
    const requests = await MaintenanceRequest.find();
    res.status(200).json(requests);
  } catch (error) {
    console.error("Error fetching maintenance requests:", error);
    res.status(500).json({ message: "Error fetching maintenance requests" });
  }
});

//for admin
const logout = () => {
  localStorage.removeItem("token");
  alert("Logged out successfully!");
};


app.listen(3000, () => {
  console.log("Server Running on port 3000");
});
