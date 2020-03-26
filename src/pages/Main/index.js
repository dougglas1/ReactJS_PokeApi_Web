import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PokebolaImg from '../../assets/pokebola.png';
import PokebolaLoad from '../../assets/pokebola_load.gif';

import api from '../../services/api';
import { Container, Form, SubmitButton, List } from './styles';

export default class Main extends Component {
  state = {
    newPokemon: '',
    pokemons: [],
    loading: false,
    error: false,
  };

  componentDidMount() {
    const pokemons = localStorage.getItem('pokemons');
    if (pokemons) {
      this.setState({ pokemons: [...JSON.parse(pokemons)] });
    }
  }

  componentDidUpdate(_, prevState) {
    const { pokemons } = this.state;
    if (prevState.pokemons !== pokemons) {
      localStorage.setItem('pokemons', JSON.stringify(pokemons));
    }
  }

  handleInputChange = (e) => {
    this.setState({ newPokemon: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    const { pokemons, newPokemon } = this.state;

    // verifica se já existe
    const exists = pokemons.some((pokemon) => pokemon.name === newPokemon);

    try {
      if (exists) {
        throw new Error('Pokémon já cadastrado');
      }

      const response = await api.get(`/pokemon/${newPokemon}`);

      const data = {
        name: response.data.name,
        order: response.data.order,
        image: response.data.sprites.front_default,
      };

      this.setState({
        newPokemon: '',
        pokemons: [...pokemons, data],
        loading: false,
      });
    } catch (error) {
      if (error.response) {
        alert('Pokémon não existente');
      } else {
        alert(error);
      }

      this.setState({
        error: true,
        loading: false,
      });
    }
  };

  render() {
    const { newPokemon, pokemons, loading, error } = this.state;

    return (
      <Container>
        <h1>
          <img src={PokebolaImg} alt="Pokebola" />
          Pokémon
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar Pokémon"
            value={newPokemon}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading_api={loading}>
            {loading ? (
              <img src={PokebolaLoad} alt="Pokebola" />
            ) : (
              <img src={PokebolaImg} alt="Pokebola" />
            )}
          </SubmitButton>
        </Form>

        <List>
          {pokemons.map((pokemon) => (
            <li key={pokemon.order}>
              <span>{pokemon.order}</span>
              <span>{pokemon.name}</span>
              <img src={pokemon.image} alt={pokemon.name} />
              <Link to={`/detail/${encodeURIComponent(pokemon.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
