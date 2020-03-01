import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div className="panel">
                <Container>
                    <div className="App-header">
                        <h1>TotallyNotCheckout</h1>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Header;