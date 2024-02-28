import React, { Component, useState } from 'react';
import { Button, Col, Container, Input, Nav, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';
import { MovieCard } from './MovieCard';
import { getSearchResults } from './Home.service';

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = { 
      movies: [],
      loading: true,
      inputValue: ''
    };
  }

  updateInputValue = (e) => {
    this.setState({inputValue: e.target.value})
  }

  searchAction = (event) => {
    const query = this.state.inputValue
    getSearchResults(query)
    .then(result => 
      this.setState({
        movies: result, 
        loading: false
      }))
  }

  movies = [
    {
      id: 1,
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
      title: 'pelicula',
      description: 'lorem ipsum dolor sit amet',
    },
    {
      id: 1,
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
      title: 'pelicula',
      description: 'lorem ipsum dolor sit amet',
    },
  ]

  render() {
    return (
      <Container>
          <h1 className='text-center'>FakeFlix</h1>
          <Row>
            <Col sm='10'>
              <Input  value={this.state.inputValue} onChange={this.updateInputValue} id='searchField' type='text' className='form-control' placeholder='Película o serie' />
            </Col>
            <Col sm='2'>
              <Button color='primary' onClick={this.searchAction}>Buscar</Button>
            </Col>
          </Row>

          <Row>
            {
            this.state.movies.length > 0 ? this.state.movies.map(m => (
            <Col key={m.id} sm='3' className='g-3'>
              <MovieCard key={m.id} imgUrl={m.imgUrl} description={m.description} title={m.title} />
            </Col>
            )):''
            }
          </Row>

          <Row className='my-4'>
            <Pagination className=''>
              <PaginationItem>
                <PaginationLink previous></PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next></PaginationLink>
              </PaginationItem>
            </Pagination>
          </Row>
        </Container>
    );
  }
}

