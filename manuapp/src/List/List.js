import "./List.css";

const List = (props) => 
{
    return(
      <div className="list">
         {props.List.map((el) =>
           (<div key={el.name}>
              <img src={el.img}/>
              <hr/>
              <p>{el.name}</p>
              <p>{el.price}</p>
              <br/>
              {el.info}
           </div>)
         )}
      </div>
    );
};

export default List;