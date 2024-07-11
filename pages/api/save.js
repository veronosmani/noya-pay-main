import dbConnect from '../../lib/dbConnect'; // Assume you have a DB connect helper
import Customer from '../../models/Customer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await dbConnect();

    try {
      const customer = new Customer({
        name: req.body.name,
        surname: req.body.surname,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        paymentAmount: req.body.paymentAmount,
        paymentStatus: req.body.paymentStatus
      });

      await customer.save();
      res.status(201).send({ success: true, message: 'Customer saved successfully', data: customer });
    } catch (error) {
      res.status(400).send({ success: false, message: 'Error saving customer', error: error.message });
    }
  } else {
    res.status(405).send({ success: false, message: 'Method not allowed' });
  }
}
