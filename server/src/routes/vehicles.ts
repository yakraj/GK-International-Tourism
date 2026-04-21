import { Router } from "express";
import { vehicles } from "../data/mockData";

const router = Router();

router.get("/", (req, res) => {
  const { minCapacity } = req.query;
  let result = vehicles;
  if (minCapacity)
    result = result.filter((v) => v.capacity >= Number(minCapacity));
  res.json(result);
});

router.get("/:id", (req, res) => {
  const vehicle = vehicles.find((v) => v.id === Number(req.params.id));
  if (!vehicle) return res.status(404).json({ error: "Vehicle not found" });
  res.json(vehicle);
});

export default router;
