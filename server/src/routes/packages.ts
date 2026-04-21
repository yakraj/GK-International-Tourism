import { Router } from "express";
import { packages } from "../data/mockData";

const router = Router();

router.get("/", (req, res) => {
  const { category, trending, special, mostVisited } = req.query;
  let result = packages;
  if (category) result = result.filter((p) => p.category === category);
  if (trending === "true") result = result.filter((p) => p.isTrending);
  if (special === "true") result = result.filter((p) => p.isSpecial);
  if (mostVisited === "true") result = result.filter((p) => p.isMostVisited);
  res.json(result);
});

router.get("/:id", (req, res) => {
  const pkg = packages.find(
    (p) => p.id === Number(req.params.id) || p.slug === req.params.id,
  );
  if (!pkg) return res.status(404).json({ error: "Package not found" });
  res.json(pkg);
});

export default router;
