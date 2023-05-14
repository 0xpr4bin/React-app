import { useEffect } from 'react';

const Payment = () => {
  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/payment/payment`);
        const data = await res.json();
        console.log(data); // or do whatever you want with the data
      } catch (error) {
        console.error(error);
      }
    };
    fetchPaymentData();
  }, []);

  return null; // return null since we're not rendering any JSX elements
};

export default Payment;
