import React from 'react';
import Card from './Card';

const Cardarea = (props) => {


    const {name, age, picture, secound} = props.data;
    const click = props.click;







    return (
        <div>

<div className="card w-96 h-full bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Age : {age}</p>
    <p>Secound : {secound}</p>
    <div className="card-actions justify-end">
      <button onClick={() => click (props.data)} className="btn-primary w-9/12 m-auto">Add to list</button>
    </div>
  </div>
</div>




            
            
        </div>
    );
};

export default Cardarea;