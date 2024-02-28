import React from 'react';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from 'reactstrap';

export function MovieCard({id, imgSrc, title, description}) {
  return <Card id={id}>
      <CardImg top width="100%" src={imgSrc} />
    <CardBody>
      <CardTitle tag='h5'>{title}</CardTitle>
      <CardText>{description}</CardText>
      <Row>
        <Col><Button color='primary'>Guardar</Button></Col>
        <Col><Button color='secondary' outline>Calificar</Button></Col>
      </Row>
    </CardBody>
  </Card>;
}
