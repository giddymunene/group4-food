import { Fragment, useState } from "react"; // Import useState hook
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: 0,
    name: "Margherita",
    description: "",
    price: 10,
    image: "https://i.imgur.com/8B8YLOo.jpg",
  },
  {
    id: 1,
    name: "Pepperoni",
    description: "",
    price: 21,
    image: "https://i.imgur.com/OHHctnf.jpg",
  },
  {
    id: 2,
    name: "Pork & Feta",
    description: "",
    price: 27,
    image: "https://i.imgur.com/48Zw4K3.png",
  },
  {
    id: 3,
    name: "Quattro Formaggi",
    description: "",
    price: 15,
    image: "https://i.imgur.com/MDrTvkI.jpg",
  },
  {
    id: 4,
    name: "Carnivora",
    description: "",
    price: 25,
    image: "https://i.imgur.com/0vPtSSO.png",
  },
  {
    id: 5,
    name: "Louisiana Chicken",
    description: "",
    price: 20,
    image: "https://i.imgur.com/lZtwJgy.png",
  },
  {
    id: 6,
    name: "Honey Mustard Chicken",
    description: "",
    price: 19,
    image: "https://i.imgur.com/SoZu61g.png",
  },
  {
    id: 7,
    name: "Hawaiian",
    description: "",
    price: 12,
    image: "https://i.imgur.com/mqTgvgl.png",
  },
  {
    id: 8,
    name: "Classic",
    description: "",
    price: 22,
    image: "https://i.imgur.com/k6IGrUd.png",
  },
  {
    "id": 9,
    "name": "Brownie",
    "description": "A delicious cake with chocolate and hazelnuts",
    "price": 7,
    "image": "https://i.imgur.com/7WbfaDN.png"
  },
  {
    "id": 10,
    "name": "Chocolate Tortilla",
    "description": "Tortilla filled with chocolate cream",
    "price": 9,
    "image": "https://i.imgur.com/Mgsc3IZ.png"
  },
  {
    "id": 11,
    "name": "Apple Pie",
    "description": "Hot pie with apple and cinnamon",
    "price": 8,
    "image": "https://i.imgur.com/OWIVhWX.png"
  },
  {
    "id": 12,
    "name": "Cheesecake",
    "description": "Cheesecake with berries topping",
    "price": 7,
    "image": "https://i.imgur.com/AsldA7x.png"
  }
];

const AvailableMeals = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredMeals = DUMMY_MEALS.filter((meal) =>
    meal.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const mealsList = filteredMeals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      poster={meal.image}
      price={meal.price}
    />
  ));

  return (
    <Fragment>
      <section className={classes.search}>
        <input
          type="text"
          placeholder="Search food items..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </section>
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    </Fragment>
  );
};

export default AvailableMeals;
