import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
      return (
        <Container fluid='md'>
          <Row>
            <Col sm='2'>
              <NavMenu />
            </Col>
            <Col>
              <Container sm='10'>
                {this.props.children}
              </Container>
            </Col>
          </Row>
        </Container>
    );
  }
}
