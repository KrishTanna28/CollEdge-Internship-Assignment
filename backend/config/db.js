import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // MongoDB Connection
        mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/contact-management')
          .then(() => console.log('MongoDB connected successfully'))
          .catch((err) => console.error('MongoDB connection error:', err));
    }catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

export default connectDB;