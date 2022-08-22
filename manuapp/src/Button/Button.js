import "./Button.css";

const Buttons = (props) =>
{
    return(
    <div>
        <button onClick={() =>{props.Action("All")}}>All</button>
        <button onClick={() =>{props.Action("Breakfast")}}>Breakfast</button>
        <button onClick={() =>{props.Action("Lunch")}}>Lunch</button>
        <button onClick={() =>{props.Action("Shakes")}}>Shakes</button>
    </div>
    );
};

export default Buttons;