import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
  date: {
    type: String,
  },
  description: {
    type: String,
  },
  type: {
    type: String,
  },
  amount: {
    type: Number,
  },
  summary: {
    type: String,
  },
});

const incomeModel = mongoose.model("Income", incomeSchema);

export default incomeModel;