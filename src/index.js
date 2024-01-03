import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />

      <Footer />
    </div>
  );

  function Menu() {
    return (
      <main className="menu">
        <h2>Our Menu</h2>
        <div>
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} />
          ))}
        </div>

        {/* <Pizza
        //   name="Pizza Spinaci"
        //   ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        //   photoName="pizzas/spinaci.jpg"
        //   price={599}
        // />

        // <Pizza
        //   name="Pizza Funghi"
        //   ingredients="Tomato, mozarella, mushrooms, and onion"
        //   photoName="pizzas/funghi.jpg"
        //   price={450}
        /> */}
      </main>
    );
  }
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.pizzaObj.photoName}></img>
      <div>
        <h2>{props.pizzaObj.name}</h2>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  // if (hour >= openHour && hour <= closeHour) alert("We are open right now!");
  // else alert("We are closed fuck off!");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We are currently open!
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
