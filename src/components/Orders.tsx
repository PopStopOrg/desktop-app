import React from "react";

interface OrderProps {
    drinkName: string;
    orderID: number;
    ingredients: string;
    color?: string;
}

const Orders: React.FC <OrderProps> = ({ drinkName, orderID, ingredients, color }) => {
    return (
        <div className="orders shadow-md" style={{ backgroundColor: color }}>
            <span className="drink-name">{drinkName}</span>
            <span className="orderID">{orderID}</span>
            <span className="ingredients">{ingredients}</span>
        </div>
    )
}

export default Orders;