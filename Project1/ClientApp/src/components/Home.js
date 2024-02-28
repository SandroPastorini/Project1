import React, { Component } from 'react';
import { Button, Col, Container, Input, Nav, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';
import { MovieCard } from './MovieCard';
import { getSearchResults } from './Home.service';

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = { movies: [], loading: true };
  }

  searchAction(event) {
    const query = event.target.value
    this.setState({
      movies: getSearchResults(query),
      loading: false
    })
  }

  movies = [
    {
      id: 1,
      imgSrc: 'https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
      title: 'pelicula',
      description: 'lorem ipsum dolor sit amet',
    },
    {
      id: 1,
      imgSrc: 'https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
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
              <Input id='searchField' type='text' className='form-control' placeholder='Película o serie' />
            </Col>
            <Col sm='2'>
              <Button color='primary' onClick={this.searchAction}>Buscar</Button>
            </Col>
          </Row>

          <Row>
            {this.state.movies.map(m => (
            <Col sm='3' className='g-3'>
              <MovieCard key={m.id} imgSrc={m.imgSrc} description={m.description} title={m.title} />
            </Col>
            ))}
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

