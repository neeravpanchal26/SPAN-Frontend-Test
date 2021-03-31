// Default imports
import React, {Component} from 'react';
import './App.css';
import Routes from "./routes/routes";
import {connect} from "react-redux";

// Custom imports
// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


// Component imports
import Navbar from './components/navbar/navbar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <div className='container'>
                    <Routes/>
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return state;
};

// Default export
export default connect(mapStateToProps)(App);