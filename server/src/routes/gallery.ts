import { Router } from "express";
import { gallery, testimonials } from "../data/mockData";

const router = Router();

router.get("/", (req, res) => {
  const { category } = req.query;
  let result = gallery;
  if (category) result = result.filter((g) => g.category === category);
  res.json(result);
});

router.get("/testimonials", (_req, res) => {
  res.json(testimonials);
});

export default router;
