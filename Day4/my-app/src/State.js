import React from 'react';
import {useState} from 'react';
const State = () => {
    const [visible,setVisible]=useState(false);

    const toggle=()=>
    {
        setVisible(!visible);
    }

setTimeout(()=>
{
    setVisible(false)
},5000);
  return (
     <>
        {visible ?(
            <div className="card-wrapper">
                <div className="card">
                    <p className="heading">We use cookies</p>
                    <p className="description">This website uses cookies to ensure you get better experience</p>
                    <div className="btn">
                        <button className="accept" onClick={toggle}>Accept</button>
                        <button className="decline" onClick={toggle}>Decline</button>
                    </div>
                </div>
            </div>
        ):(
             <button onClick={toggle}>Manage Cookies</button>
        )}
     </>

  )
}

export default State