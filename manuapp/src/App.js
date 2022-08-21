import './App.css';
import {useState} from "react";
import List from './List/List';
import Buttons from './Button/Button';

function App() {
  const listOfFoods = [
    {
      img:"#",
      name:"Milk Shake",
      price:"7",
      info:"info",
      type:"Shakes"
    },
    {
      img:"#",
      name:"Bannana Shake",
      price:"7",
      info:"info",
      type:"Shakes"
    },
    {
      img:"#",
      name:"Chocolate Shake",
      price:"8",
      info:"info",
      type:"Shakes"
    },
    {
      img:"#",
      name:"Omlet",
      price:"10",
      info:"info",
      type:"Breakfast"
    },
    {
      img:"#",
      name:"Bacon with eggs",
      price:"12",
      info:"info",
      type:"Breakfast"
    },
    {
      img:"#",
      name:"Hamburger",
      price:"13",
      info:"info",
      type:"Lunch"
    },
    {
      img:"#",
      name:"BBQ Burger",
      price:"15",
      info:"info",
      type:"Lunch"
    },
    {
      img:"#",
      name:"Cheeseburger",
      price:"14",
      info:"info",
      type:"14"
    },
    {
      img:"#",
      name:"Steak",
      price:"18",
      info:"info",
      type:"Lunch"
    },
  ];
  const listOfFilters ={
    All: (el) => el.type =="Shakes"|| "Lunch" || "Breakfast",
    Breakfast: (el) => el.type =="Breakfast",
    Lunch: (el) => el.type =="Lunch",
    Shakes: (el) => el.type =="Shakes"
  };
  const [list, setList] = useState(listOfFoods);
  const ApplyFilter = (action) =>
  {
     setList(listOfFoods.filter((el) => action(el)));
  };
  return (
    <div className="App">
      <h1>ManuApp</h1>
      <Buttons Action={ApplyFilter} Filters={listOfFilters}/>
      <List List={list}/>
    </div>
  );
};

export default App;
