import React from 'react';

  const Validation = (props)=>{
    if(props.isEnabled)
      {return (<p className="Error">Required field</p>);}
    else {
      return(null);
    }
  }

export default Validation;
