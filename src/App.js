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
import {Spinner} from "react-bootstrap";

function App(){
    const [suppliers, setSuppliers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect( ()=>{
        async function getSuppliers() {
            setLoading(true);
            try {
                const result = await axios.get('https://api-suppliers.herokuapp.com/api/suppliers');
                await setSuppliers(result.data)
                setLoading(false);
            }
            catch (err){
                setError(err)
                setLoading(false);
            }
        };

        getSuppliers()
    }, [])
    function loadingComponent(){
        if(loading){
            return(
                <div className="spin">
                    <Spinner animation="border"/>
                </div>
            )
        }else{
            return(
                <Switch>
                    <Route exact path="/list">
                        <Container>
                            <List suppliers={suppliers}></List>
                            {error ? <p className="error">{error}</p> : ""}
                        </Container>
                    </Route>
                    <Route exact path="/map">
                        <Map suppliers={suppliers}></Map>
                    </Route>
                </Switch>
            )
        }
    }

    return (
        <Router>
            <div id="app">
                <Jumbotron className="jumbotron">
                    <h1>Spiruline Suppliers</h1>
                    <div className="menu">
                        <Link className="button" to="/list">
                            {loading ? "Loading ..." : "Suppliers List"}
                        </Link>
                        <Link className="button" to="/map"

                        >Suppliers Map</Link>
                    </div>
                </Jumbotron>
                <section className="content">
                    {loadingComponent()}
                </section>
            </div>
        </Router>
    );

}

export default App;
