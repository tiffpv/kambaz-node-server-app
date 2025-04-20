import mongoose from "mongoose";

const attemptSchema = new mongoose.Schema({
    _id: String,
    user: { type: String, required: true },        
    quiz: { type: String, required: true },            
    answers: { type: Map, of: mongoose.Schema.Types.Mixed }, 
    score: Number,
    attemptNumber: Number,
    submittedAt: { type: Date, default: Date.now }
}, { collection: "attempts" });
  
export default attemptSchema;