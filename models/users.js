import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    password: String, // This should be hashed
});

export default mongoose.models.User || mongoose.model('User', userSchema);
