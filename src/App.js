import React, { Component } from 'react';
import axios from 'axios';

class Pokemon extends Component {
  state = {
    pokemon: null,
  }

  async componentDidMount() {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`);
    this.setState({ pokemon: res.data });
  }

  render() {
    return (

      <div className="card" style={{ width: '300px' ,borderRadius: "15px", background: "yellow", marginTop: "2pc", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} className="card-img-top" alt={this.state.pokemon ? this.state.pokemon.name : "Pokemon"} />
        <div className="card-body">
          <h5 className="card-title">{this.state.pokemon ? this.state.pokemon.name : "Pokemon"}</h5>
          <p className="card-text">{this.state.pokemon ? this.state.pokemon.types.map(type => type.type.name).join(', ') : ""}</p>
        </div>
      </div>
    );
  }
}

export default class PokemonList extends Component {
  state = {
    pokemon: [1, 2, 3, 4, 5].map(id => <Pokemon id={id} key={id} />)
  }
  
  render() {
    return (
      <div className="container">
      <div className="row">
      {this.state.pokemon}
      </div>
      </div>
      );
    }
}