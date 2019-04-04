import React from 'react';
import Card from './Card';

const CardList = ({ plants }) => {
    return (
    <div>
      {
      plants.map((user, i) => {
        return (
          <Card
            key={i}
            id={plants[i].id}
            name={plants[i].name}
            wd={plants[i].wd}
            light={plants[i].light}
            image={plants[i].image}
            />
        );
      })
    }
    </div>
  );
}

export default CardList;
