import { Router } from "express";
import prisma from "../lib/prisma";
import { authenticateToken } from "../middleware/auth";

const router = Router();

// Create booking (protected)
router.post("/", authenticateToken as any, async (req: any, res: any) => {
  const {
    packageId,
    vehicleId,
    hotelId,
    travelDate,
    peopleCount,
    totalAmount,
    advanceAmount,
    specialRequests,
  } = req.body;
  try {
    const booking = await prisma.booking.create({
      data: {
        userId: req.userId,
        packageId,
        vehicleId,
        hotelId: hotelId || null,
        travelDate: new Date(travelDate),
        peopleCount,
        totalAmount,
        advanceAmount,
        specialRequests: specialRequests || "",
        status: "pending",
        paymentStatus: "pending",
      },
    });
    res.status(201).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Booking failed" });
  }
});

// Get user's bookings
router.get("/my", authenticateToken as any, async (req: any, res: any) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: { userId: req.userId },
      orderBy: { createdAt: "desc" },
    });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

export default router;
