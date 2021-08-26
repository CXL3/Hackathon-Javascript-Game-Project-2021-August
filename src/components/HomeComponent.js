import React from 'react';
import {  Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div className="container">
            <h4>Home</h4>
            <Button color="primary">
                <Link to='/landingPage'>
                    <h4 className="text-white">Start the game</h4>
                </Link>
                
            </Button>
        </div>
    );
}

export default Home;   