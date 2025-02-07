import React from "react";
import Orders from "./Orders";

const Body: React.FC = () => {
  return (
    <div className="main">
      <Orders
        color="#e34a4a"
        drinkName="Sprite-Banana"
        orderID={101}
        ingredients="Sprite, Banana"
      />
      <Orders
        color="#61BB34"
        drinkName="Piña-Fanta"
        orderID={102}
        ingredients="Sprite, Banana"
      />
      <Orders
        color="#F3BF45"
        drinkName="Orange-Vanilla"
        orderID={103}
        ingredients="Sprite, Banana"
      />
      
      <Orders
        color="#4C3B4D"
        drinkName="Sprite-Banana"
        orderID={105}
        ingredients="Sprite, Banana"
      />
      <Orders
        color="#F3BF45"
        drinkName="Sprite-Banana"
        orderID={106}
        ingredients="Sprite, Banana"
      />
      <Orders
        color="#61BB34"
        drinkName="Sprite-Banana"
        orderID={107}
        ingredients="Sprite, Banana"
      />
    </div>
  );
};

export default Body;
