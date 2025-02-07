import React from "react";

interface OrderProps {
  drinkName: string;
  orderID: number;
  description?: string;
  ingredients: string;
  status: "pending" | "inProgress" | "qualityCheck" | "completed" | "cancelled";
}

const getStatusColor = (status: OrderProps["status"]) => {
  const statusColor: Record<OrderProps["status"], string> = {
  pending: "bg-rose-500",
  inProgress: "bg-amber-400",
  qualityCheck: "bg-green-900",
  completed: "bg-green-600",
  cancelled: "bg-zinc-500",
};
return statusColor[status] || "bg-zinc-500";
};

const Orders: React.FC<OrderProps> = ({
  drinkName,
  orderID,
  description,
  ingredients,
  status,
}) => {
  return (
    <div className="border border-zinc-500 rounded-sm m-1 shadow-md ">

      <div className={`${getStatusColor(status)}`}>
        <span className="drink-name flex items-center justify-center p-1">{drinkName}</span>
      </div>

      <div className="body flex flex-col items-center justify-center p-1">
        <span className="orderID m-2">{orderID}</span>
        <span className="description m-2">{description}</span>
        <span className="ingredients m-2">{ingredients}</span>
      </div>

    </div>
  );
};

export default Orders;
