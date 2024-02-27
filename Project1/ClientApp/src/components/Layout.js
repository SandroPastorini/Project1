import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
      return (
          <div className="container">
              <div className="row">
            <NavMenu />
              <Container className="col-8">
                {this.props.children}
            </Container>
              </div>
      </div>
    );
  }
}
