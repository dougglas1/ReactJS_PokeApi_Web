import React, { Component } from 'react';

import PokebolaImg from '../../assets/pokebola.png';
import PokebolaLoad from '../../assets/pokebola_load.gif';
import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    loading: false,
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
  };

  render() {
    const { loading } = this.state;

    return (
      <Container>
        <h1>
          <img src={PokebolaImg} alt="Pokebola" />
          Pokémon
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Adicionar Pokémon" />

          <SubmitButton loading_api={loading}>
            {loading ? (
              <img src={PokebolaLoad} alt="Pokebola" />
            ) : (
              <img src={PokebolaImg} alt="Pokebola" />
            )}
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
