import React from 'react'
import PaymentHeader from '../../Components/PaymentHeader'
import { useNavigate } from 'react-router-dom';
import './ChoosePayment.css'
import Button from '../../Components/Button';

const ChoosePayment = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };
    const handleContinue = () => {
        navigate('/entercarddetail');
    };



    return (
        <div>
            <PaymentHeader onClick={handleBack} />
            <h2 className='choose-payment-new-method-text'>
                Add a new payment method
            </h2>
            <p className='choose-payment-method-subtitle'>Lorem ipsum dolor sit amet, consecte</p>

            <Button onClick={handleContinue} className='choose-payment-button'>Continue</Button>

        </div>
    )
}

export default ChoosePayment