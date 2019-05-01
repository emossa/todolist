import React from 'react';

  const Todos = (props)=>{
    return (<div>
              <p>Todo:</p>
              <input type="text"></input>
              <p>Expiration date: </p>
              <input type="date"/><br/>
              <button onClick={props.addToDo}>Add to do</button>
            </div>
            )
  }

export default Todos;
