import React from 'react';
import PropTypes from 'prop-types';


function Food({name, rating}) {
  //console.log(props.fav);
  return (
    <div>
      <h1>I like {name}</h1>
      <h2>{rating}/5.0</h2>
    </div>
    );
  }

const foodIlike = [
  { 
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/",
      rating:5

  },
  {
    id:2,
    name: "Samqueopsal",
    image: 
      "",
      rating:3.4

  },
  {
    id:3,
    name: "Bibimbap",
    image:
      "",
      rating:6

  }


];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  rating: PropTypes.number.isRequired

};


function App() {
  return (
  <div>
    {foodIlike.map(dish =>( 
      <Food key={dish.id} name={dish.name} rating={dish.rating}/>
    ))}
    </div>
  );
}

export default App;
