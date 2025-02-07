import React from "react";

interface OrderProps {
  drinkName: string;
  orderID: number;
  ingredients: string;
  color?: string;
}

const Orders: React.FC<OrderProps> = ({
  drinkName,
  orderID,
  ingredients,
  color,
}) => {
  return (
    <div className="border border-zinc-500 rounded-sm m-1 shadow-md ">

      <div className={`${color}`}>
        <span className="drink-name flex items-center justify-center p-1">{drinkName}</span>
      </div>

      <div className="body flex flex-col items-center justify-center p-1">
        <span className="orderID">{orderID}</span>
        <span className="ingredients">{ingredients}</span>
      </div>

    </div>
  );
};

export default Orders;
