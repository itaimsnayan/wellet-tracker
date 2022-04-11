import express from "express";
import Income from "./incomeModel";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const income = new Income(req.body);
    const savedIncome = await income.save();
    if (savedIncome) return res.send({ success: true, data: savedIncome });
  } catch (error) {
    return res.send({ error: error.message });
  }
});

router.put("/update", async (req, res) => {
  try {
    const { _id: incomeId, date, description, type, amount, summary } = req.body;
    if (!incomeId)
      return res.send({ error: "Income id is required.", success: false });
    const income = await Income.findById(incomeId);
    if (!income) return res.send({ error: "Record not found", success: false });

    income.date = date;
    income.description = description;
    income.type = type;
    income.amount = amount;
    income.summary = summary;

    const updatedIncome = await income.save();
    if (updatedIncome) return res.send({ success: true, data: updatedIncome });
    else return res.send({ error: "Not updated successfully", success: false });
  } catch (error) {
    return res.send({ error: error.message });
  }
});

router.delete("/delete:id", async (req, res) => {
  try {
    const incomeId = req.params.id;
    const deletedIncome = await Income.findByIdAndDelete(incomeId);
    if (!deletedIncome)
      return res.send({ error: "Error in deleting income", success: false });
    else return res.send({ success: true, message: "Income Deleted." });
  } catch (error) {
    return res.send({ error: error.message });
  }
});

router.get("/list", async (req, res) => {
  const income = await Income.find();
  res.send({ data: income });
});

export default router;
