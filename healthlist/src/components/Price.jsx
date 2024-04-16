import React, { useState } from 'react';
import './Price.css'; 

function Price() {
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        cardHolderName: '',
        expiryDate: '',
        cvc: '',
        country: '',
        address: '',
        city: '',
        pinCode: '',
        state: ''
    });

    const [upiId, setUpiId] = useState('');

    const handleCardInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
    };

    const handleInputChange = (e) => {
        setUpiId(e.target.value);
    };

    const handlePaymentWithCard = () => {
        // Implement payment with card logic here
    };

    const handlePaymentWithScannerOrUPI = () => {
        // Implement payment with scanner or UPI logic here
    };

    const handleScanQRCode = () => {
        // Implement QR code scanning logic here
    };

    return (
        <div className="Price">
            <div className="card">
                <div className="card-header">Pay with Card</div>
                <div className="card-body">
                    <form>
                        <label htmlFor="cardNumber">Card Number:</label>
                        <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 5678 9123 1344" value={cardDetails.cardNumber} onChange={handleCardInputChange} /><br />

                        <label htmlFor="expiryDate">Expiry Date (MM/YY):</label>
                        <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" value={cardDetails.expiryDate} onChange={handleCardInputChange} />
                        <label htmlFor="cvc">CVC:</label>
                        <input type="text" id="cvc" name="cvv" value={cardDetails.cvc} onChange={handleCardInputChange} />

                        <label htmlFor="cardHolderName">Card Holder Name:</label>
                        <input type="text" id="cardHolderName" name="cardHolderName" placeholder="Full Name on Card" value={cardDetails.cardHolderName} onChange={handleCardInputChange} /><br />
                        <label htmlFor="country">Country:</label>
                        <input type="text" id="country" name="country" value={cardDetails.country} onChange={handleCardInputChange} />
                        <button onClick={handlePaymentWithCard}>Pay</button>
                    </form>
                </div>
            </div>
            <div className="card">
                <div className="card-header">Pay with Scanner or UPI ID</div>
                <div className="card-body">
                    <label htmlFor="upiId">Enter UPI ID:</label>
                    <input
                        type="text"
                        id="upiId"
                        name="upiId"
                        value={upiId}
                        onChange={handleInputChange}
                        placeholder="Enter your UPI ID"
                    />
                    <button onClick={handlePaymentWithScannerOrUPI}>Pay</button>
                </div>
                <div className="card-body">
                    <button onClick={handleScanQRCode}>Scan QR Code</button>
                </div>
            </div>
        </div>
    );
}

export default Price;