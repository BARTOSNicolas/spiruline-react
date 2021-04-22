import React, {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import axios from "axios";

import List from './components/List'
import Map from './components/Map'

import './App.scss';
import {Container} from 'react-bootstrap';
import {Jumbotron} from "react-bootstrap";

function App(){
    const [suppliers, setSuplliers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    function getSuppliers() {
        setLoading(true);
        setTimeout(()=>{
            axios.get('https://api-suppliers.herokuapp.com/api/suppliers')
                .then(response => {
                    setSuplliers(response.data)
                    setLoading(false);
                })
                .catch(error => {
                    setError(error)
                    setLoading(false);
                })
        },1000)
    }

    useEffect(()=>{
        getSuppliers()
        console.log('test')
    }, [])

    return (
        <Router>
            <div id="app">
                <Jumbotron className="jumbotron">
                    <h1>Spiruline Suppliers</h1>
                    <div className="menu">
                        <Link className="button" to="/list">
                            {loading ? "Loading" : "Suppliers List"}
                        </Link>
                        <Link className="button" to="/map">Suppliers Map</Link>
                    </div>
                </Jumbotron>
                <section className="content">
                        <Switch>
                            <Route exact path="/list">
                                <Container>
                                    <List suppliers={suppliers}></List>
                                    {error ? <p>{error}</p> : ""}
                                </Container>
                            </Route>
                            <Route exact path="/map">
                                <Map suppliers={suppliers}></Map>
                            </Route>
                        </Switch>
                </section>
            </div>
        </Router>
    );

}

export default App;
