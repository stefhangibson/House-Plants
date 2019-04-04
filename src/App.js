import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { plants } from './plants';
import './App.css';


class App extends Component  {
  constructor() {
    super()
    this.state = {
      plants: plants,
      searchfield: ''
    }
  }

onSearchChange = (event) => {
  this.setState({ searchfield: event.target.value })
}
  render(){
    const filteredPlants = this.state.plants.filter(plants => {
      return plants.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return(
      <div className='tc'>
        <h1 className='f1'>HOUSE PLANTS</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList plants ={filteredPlants} />
      </div>
    );
  }

}

export default App;
