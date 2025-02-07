import React from "react";
import Orders from "./Orders";

const Body: React.FC = () => {
  return (
    <div className="main flex flex-wrap">
      <Orders
        color="bg-rose-500"
        drinkName="Sprite-Banana"
        orderID={101}
        ingredients="Sprite, Banana"
      />
      <Orders
        color="bg-amber-400"
        drinkName="Piña-Fanta"
        orderID={102}
        ingredients="Sprite, Banana"
      />
      <Orders
        color="bg-green-600"
        drinkName="Orange-Vanilla"
        orderID={103}
        ingredients="Sprite, Banana"
      />
      
      <Orders
        color="bg-zinc-500"
        drinkName="Sprite-Banana"
        orderID={105}
        ingredients="Sprite, Banana"
      />
      <Orders
        color="bg-rose-500"
        drinkName="orale"
        orderID={106}
        ingredients="Sprite, Banana"
      />
      <Orders
        color="bg-amber-400"
        drinkName="Sprite-Banana"
        orderID={107}
        ingredients="Sprite, Banana"
      />
    </div>
  );
};

export default Body;
