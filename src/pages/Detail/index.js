import React, { Component } from 'react';
import api from '../../services/api';
import { Container, Main } from './styles';

export default class Detail extends Component {
  state = {
    pokemon: [],
  };

  async componentDidMount() {
    const { match } = this.props;
    const name = decodeURIComponent(match.params.pokemon);

    const response = await api.get(`/pokemon/${name}`);

    const data = {
      name: response.data.name,
      order: response.data.order,
      imageFront: response.data.sprites.front_default,
      imageBack: response.data.sprites.back_default,
      base_experience: response.data.base_experience,
      weight: response.data.weight,
      types: response.data.types[0].type.name,
      stats: response.data.stats,
      abilities: response.data.abilities[0].ability.name,
    };

    this.setState({
      pokemon: data,
    });
  }

  render() {
    const { pokemon } = this.state;

    return (
      <Container>
        <Main>
          <h1>Código: {pokemon.order}</h1>
          <h1>Nome: {pokemon.name}</h1>
          <img src={pokemon.imageFront} alt="Front" />
          <img src={pokemon.imageBack} alt="Back" />
          <h1>EXP {pokemon.base_experience}</h1>
          <h1>WT {pokemon.weight / 10} kg</h1>
          <h1>Tipo {pokemon.types}</h1>
          <h1>Estatística:</h1>
          response.data.stats.map((e) =>
          <p>{e.stat.name}</p>
          <p>{e.base_stat}</p>
          );
          <h1>Habilidade {pokemon.abilities}</h1>
        </Main>
      </Container>
    );
  }
}
