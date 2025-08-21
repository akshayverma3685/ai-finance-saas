import express from "express";
const router = express.Router();

// ✅ Example: GET analytics summary
router.get("/summary", async (req, res) => {
  try {
    // Yeh abhi demo response hai
    res.json({
      totalExpenses: 1200,
      monthlyTrend: [200, 300, 250, 450],
      topCategories: ["Food", "Travel", "Bills"]
    });
  } catch (error) {
    console.error("Analytics Error:", error);
    res.status(500).json({ message: "Error fetching analytics" });
  }
});

export default router;
