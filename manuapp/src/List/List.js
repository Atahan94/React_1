import "./List.css";

const List = (props) => 
{
    return(
      <ul>
         {props.List.map((el) =>
           (<li key={el.name}>
              <img src={el.img}/>
              <hr/>
              <p>{el.name}</p>
              <p>{el.price}</p>
              <br/>
              {el.info}
              
           </li>)
         )}
      </ul>
    );
};

export default List;