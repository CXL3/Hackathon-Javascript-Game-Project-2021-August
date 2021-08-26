import React, { Component } from 'react';
import {  Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class LandingPage extends Component {

    render(){
        return (
            <div className="container">
                <Button type="submit" color="primary">
                    <Link to='/game'>
                        <h4 className="text-white">Sumbit</h4>
                    </Link>
                </Button>
            </div>
        );
    }
}

export default LandingPage;   