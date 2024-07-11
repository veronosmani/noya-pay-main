import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  name: String,
  surname: String,
  phoneNumber: String,
  email: String,
  paymentAmount: Number,
  paymentStatus: String // e.g., "Paid", "Failed"
});

const Customer = mongoose.models.Customer || mongoose.model('Customer', customerSchema);

export default Customer;
