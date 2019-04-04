import React from 'react';


const Card = ({ name, wd, light, image }) => {
  return (
    <div className='tc bg-near-white dib br3 pa3 ma2 grow bw2 shadow6'>
      <div>
        <p>{image}</p>
        <h2 className='f2'>{name}</h2>
        <p className='f3'>{wd}</p>
        <p className='f3'>{light}</p>
      </div>
    </div>
  );
}

export default Card;
