import React from 'react';

const Navbar=(props)=> {
  
  
  
    return (
      <div className="navbar">
        <span className="navlogo">
          <img src="https://image.flaticon.com/icons/svg/2121/2121815.svg"/>  
          <span>
            {props.itemCount}
          </span>
        </span>
         
      </div>
    );
  
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default Navbar;