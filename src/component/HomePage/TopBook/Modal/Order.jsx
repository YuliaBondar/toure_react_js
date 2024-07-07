import React from 'react';
import './ModalInf.css';

const Order = ({ childrenPrice, AdultPrice, childrenCount, adultsCount, phoneNumber, setIsInputEmpty }) => {

    const handleOrderSubmit = () => {
        if (phoneNumber.trim() === '') {
            setIsInputEmpty(true);
        } else {
            const orderData = {
                phoneNumber: phoneNumber,
                childrenCount: childrenCount,
                adultsCount: adultsCount,
                totalAmount: childrenPrice + AdultPrice
            };

            fetch('https://reqres.in/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка при отправке данных на сервер');
                }
                return response.json();
            })
            .then(data => {
                alert('Заявка успешно отправлена!');
                console.log(data);
            })
            .catch(error => {
                console.error('Произошла ошибка:', error);
            });
        }
    };

    return (
      <div className='or_der'>
          <span>Цена: {new Intl.NumberFormat(
                'ru-US', {
                    style: 'currency',
                    currency: 'USD',
                }).format(childrenPrice + AdultPrice)} </span>
          <button className='order_button' onClick={handleOrderSubmit}>Оставить заявку</button>
      </div>
    );
};

export default Order;