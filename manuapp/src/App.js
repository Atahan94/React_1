import './App.css';
import {useState} from "react";
import List from './List/List.js';
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
  const [list, setList] = useState(listOfFoods);
  const ApplyFilter = (filter) =>
  {
      setList(filter == "All"?listOfFoods : listOfFoods.filter((el) => el.type == filter));
  };
  return (
    <div className="App">
      <h1>ManuApp</h1>
      <Buttons Action={ApplyFilter}/>
      <List List={list}/>
    </div>
  );
};

export default App;
