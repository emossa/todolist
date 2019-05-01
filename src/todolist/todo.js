import React from 'react';

  const Todo = (props)=>{
    return(
      <li className={props.type} onTap={props.func} onDoubleClick={props.func}><span><b>{props.type}: </b>{props.children} <b>Exp. date:</b> {props.ExpDate}</span></li>
    )
  }

export default Todo;
