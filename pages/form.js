import React from "react";
import reservationImg from "../app/reservationImg.svg";
import "../app/globals.css";


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
      const response = await fetch("/api/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        alert("Payment processed successfully!");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Failed to process payment:", error);
      alert("Failed to process payment. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center relative py-[50px] bg-white rounded-[15px] w-[555px] h-[823px]">
      <div className="flex flex-row justify-between items-center mx-auto space-x-4">
        <h1 className="poppins-medium text-[30px] mt-28 mr-12">
          Reservation <br />
          Details
        </h1>
        <div
          className="w-[160px] h-[265px] bg-no-repeat"
          style={{ backgroundImage: `url(${reservationImg.src})` }}
        ></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="border-2 border-gray-600 rounded-[5px] mt-6 h-[45px] w-[420px] pl-4 flex flex-row justify-between items-center poppins-medium">
            <input
              className="justify-center w-full h-full bg-transparent outline-none uppercase placeholder:text-black"
              type="text"
              id="name"
              name="name"
              placeholder="Name / Surname"
              required
            />
          </div>
          <div className="border-2 border-gray-600 rounded-[5px] mt-6 h-[45px] w-[420px] pl-4 flex flex-row justify-between items-center poppins-medium">
            <input
              className="w-full h-full bg-transparent outline-none uppercase placeholder:text-black"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="border-2 border-gray-600 rounded-[5px] mt-6 h-[45px] w-[420px] pl-4  fle flex-row justify-between items-center poppins-medium">
            <input
              className="w-full h-full bg-transparent outline-none uppercase placeholder:text-black"
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="border-2 border-gray-600 rounded-[5px] mt-6 h-[45px] w-[420px] pl-4 uppercase flex flex-row justify-between items-center poppins-medium">
            <h1>Payment Amount</h1>
            <h1 className="bg-gray-300 w-[125px] h-[45px] rounded-[5px] border-2 border-r-0 border-gray-600 text-center font-bold flex items-center justify-center poppins-bold">
              500$
            </h1>
          </div>
        </div>
        <div className="mb-20">
          <button
            className="bg-red-800 text-[16px] font-medium text-white w-[420px] h-[45px] rounded-[5px] mt-32 poppins-medium"
            type="submit"
          >
            Continue to payment
          </button>
        </div>
      </form>
    </div>
  );
}
