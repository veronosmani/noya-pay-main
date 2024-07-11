import React from 'react';
import reservationImg from '../app/reservationImg.svg'

export default function FormPage() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = {
        name: event.target.name.value,
        surname: event.target.surname.value,
        phoneNumber: event.target.phoneNumber.value,
        email: event.target.email.value,
        paymentAmount: event.target.paymentAmount.value,
      };
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        if (data.success) {
            alert('Payment processed successfully!');
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error("Failed to process payment:", error);
        alert('Failed to process payment. Please try again.');
    }
};

  return (
    <div className='flex relative p-20 bg-white rounded-[15px] w-[555px] h-[823px]'>
      <div>
      <h1 className=''>Reservation Details</h1>
      <div className="w-[150px] h-[265px]" style={{backgroundImage: `url(${reservationImg.src})`}} ></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="surname">Surname:</label>
          <input type="text" id="surname" name="surname" required />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <input type="hidden" id="paymentAmount" name="paymentAmount" value="100" />
        </div>
        <div>
          <button type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
}
