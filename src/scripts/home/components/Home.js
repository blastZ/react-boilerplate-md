import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Home extends Component {
  render() {
    const { sayHello } = this.props;
    return (
      <div className="home-container">
        <Button variant="contained" color="primary">Hello</Button>
      </div>
    )
  }
}

export default Home;