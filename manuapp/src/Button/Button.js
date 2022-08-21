import "./Button.css";

const Buttons = (props) =>
{
    return(
    <div>
        <button onClick={() =>{props.Action(props.Filters.All)}}>All</button>
        <button onClick={() =>{props.Action(props.Filters.Breakfast)}}>Breakfast</button>
        <button onClick={() =>{props.Action(props.Filters.Lunch)}}>Lunch</button>
        <button onClick={() =>{props.Action(props.Filters.Shakes)}}>Shakes</button>
    </div>
    );
};

export default Buttons;