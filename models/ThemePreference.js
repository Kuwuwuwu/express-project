import { Schema, model } from "mongoose";

const themeSchema = new Schema({
  userId:    { type: String, required: true, unique: true },
  theme:     { type: String, enum: ["light","dark"], default: "light" },
  updatedAt: { type: Date, default: Date.now }
});

export default model("ThemePreference", themeSchema);