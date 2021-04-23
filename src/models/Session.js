import mongoose from 'mongoose';

export const Session = mongoose.model("Session", { userId: String });