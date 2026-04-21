import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import packageRoutes from "./routes/packages";
import vehicleRoutes from "./routes/vehicles";
import hotelRoutes from "./routes/hotels";
import galleryRoutes from "./routes/gallery";
import bookingRoutes from "./routes/bookings";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Backend Server is Running!");
});

io.on("connection", (socket) => {
  console.log("a user connected:", socket.id);

  socket.on("message", (data) => {
    console.log("message received:", data);
    io.emit("message", { from: socket.id, message: data });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
