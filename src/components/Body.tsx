import React from "react";
import Orders from "./Orders";

const Body: React.FC = () => {
  return (
    <div className="main flex flex-wrap overflow-y-auto h-screen scrollbar">
      <Orders
        status="pending"
        drinkName="Sprite-Banana"
        orderID={101}
        ingredients="Sprite, Banana"
        description="This is a description"
      />
      <Orders
        status="inProgress"
        drinkName="Piña-Fanta"
        orderID={102}
        ingredients="Sprite, Banana"
      />
      <Orders
        status="completed"
        drinkName="Orange-Vanilla"
        orderID={103}
        ingredients="Sprite, Banana"
      />

      <Orders
        status="cancelled"
        drinkName="Sprite-Banana"
        orderID={105}
        ingredients="Sprite, Banana"
      />
      <Orders
        status="pending"
        drinkName="orale"
        orderID={106}
        ingredients="Sprite, Banana"
      />
      <Orders
        status="inProgress"
        drinkName="Sprite-Banana"
        orderID={107}
        ingredients="Sprite, Banana"
      />
      <Orders
        status="pending"
        drinkName="Mango-Lime"
        orderID={108}
        ingredients="Mango, Lime, Soda"
        description="Sweet and tangy mango-lime mix"
      />
      <Orders
        status="inProgress"
        drinkName="Cherry-Berry"
        orderID={109}
        ingredients="Cherry, Mixed Berries, Ice"
      />
      <Orders
        status="completed"
        drinkName="Coconut-Pineapple"
        orderID={110}
        ingredients="Coconut, Pineapple, Cream"
        description="Tropical vibes in a cup"
      />
      <Orders
        status="cancelled"
        drinkName="Raspberry-Fizz"
        orderID={111}
        ingredients="Raspberry, Sparkling Water"
      />
      <Orders
        status="pending"
        drinkName="Cola-Cherry"
        orderID={112}
        ingredients="Cola, Cherry Syrup"
      />
      <Orders
        status="inProgress"
        drinkName="Ginger-Lemon"
        orderID={113}
        ingredients="Ginger, Lemon, Honey"
      />
      <Orders
        status="completed"
        drinkName="Chocolate-Mint"
        orderID={114}
        ingredients="Chocolate, Mint, Milk"
      />
      <Orders
        status="cancelled"
        drinkName="Watermelon-Basil"
        orderID={115}
        ingredients="Watermelon, Basil, Soda"
      />
      <Orders
        status="pending"
        drinkName="Apple-Cinnamon"
        orderID={116}
        ingredients="Apple, Cinnamon, Sugar"
      />
      <Orders
        status="inProgress"
        drinkName="Blueberry-Vanilla"
        orderID={117}
        ingredients="Blueberry, Vanilla, Cream"
      />
      <Orders
        status="completed"
        drinkName="Peach-Lemonade"
        orderID={118}
        ingredients="Peach, Lemon, Sugar"
      />
      <Orders
        status="cancelled"
        drinkName="Grape-Soda"
        orderID={119}
        ingredients="Grape Juice, Carbonated Water"
      />
      <Orders
        status="pending"
        drinkName="Sprite-Banana"
        orderID={101}
        ingredients="Sprite, Banana"
        description="This is a description"
      />
      <Orders
        status="inProgress"
        drinkName="Piña-Fanta"
        orderID={102}
        ingredients="Sprite, Banana"
      />
      <Orders
        status="completed"
        drinkName="Orange-Vanilla"
        orderID={103}
        ingredients="Sprite, Banana"
      />

      <Orders
        status="cancelled"
        drinkName="Sprite-Banana"
        orderID={105}
        ingredients="Sprite, Banana"
      />
      <Orders
        status="pending"
        drinkName="orale"
        orderID={106}
        ingredients="Sprite, Banana"
      />
      <Orders
        status="inProgress"
        drinkName="Sprite-Banana"
        orderID={107}
        ingredients="Sprite, Banana"
      />
      <Orders
        status="pending"
        drinkName="Mango-Lime"
        orderID={108}
        ingredients="Mango, Lime, Soda"
        description="Sweet and tangy mango-lime mix"
      />
      <Orders
        status="inProgress"
        drinkName="Cherry-Berry"
        orderID={109}
        ingredients="Cherry, Mixed Berries, Ice"
      />
      <Orders
        status="completed"
        drinkName="Coconut-Pineapple"
        orderID={110}
        ingredients="Coconut, Pineapple, Cream"
        description="Tropical vibes in a cup"
      />
      <Orders
        status="cancelled"
        drinkName="Raspberry-Fizz"
        orderID={111}
        ingredients="Raspberry, Sparkling Water"
      />
      <Orders
        status="pending"
        drinkName="Cola-Cherry"
        orderID={112}
        ingredients="Cola, Cherry Syrup"
      />
      <Orders
        status="inProgress"
        drinkName="Ginger-Lemon"
        orderID={113}
        ingredients="Ginger, Lemon, Honey"
      />
      <Orders
        status="completed"
        drinkName="Chocolate-Mint"
        orderID={114}
        ingredients="Chocolate, Mint, Milk"
      />
    </div>
  );
};

export default Body;
