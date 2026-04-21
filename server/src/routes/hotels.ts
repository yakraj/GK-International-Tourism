import { Router } from "express";
import { hotels } from "../data/mockData";

const router = Router();

router.get("/", (req, res) => {
  const { location, category } = req.query;
  let result = hotels;
  if (location)
    result = result.filter((h) =>
      h.location.toLowerCase().includes((location as string).toLowerCase()),
    );
  if (category) result = result.filter((h) => h.category === category);
  res.json(result);
});

router.get("/:id", (req, res) => {
  const hotel = hotels.find((h) => h.id === Number(req.params.id));
  if (!hotel) return res.status(404).json({ error: "Hotel not found" });
  res.json(hotel);
});

export default router;
