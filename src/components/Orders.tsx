import React from "react";
import "../styles/Orders.css";

interface OrderProps {
    drinkName: string;
    orderID: number;
    ingredients: string;
    color?: string;
}

const Orders: React.FC <OrderProps> = ({ drinkName, orderID, ingredients, color }) => {
    return (
        <div className="orders" style={{ backgroundColor: color }}>
            <span className="drink-name">{drinkName}</span>
            <span className="orderID">{orderID}</span>
            <span className="ingredients">{ingredients}</span>
        </div>
    )
}

export default Orders;