import React from 'react';
import { format } from 'timeago.js';

import './Supplier.scss';
import {Card} from "react-bootstrap";



class Supplier extends React.Component{

    dateFormat = format(this.props.supplier.checkedAt, 'fr_FR')
    options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


    setStatus(){
        this.setState({
            status: !this.props.supplier.status
        })
        console.log(this.state)
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.props.supplier.name}</Card.Title>
                    <Card.Subtitle
                        className={"mb-2 " + (this.props.supplier.status ? 'stock' : 'no-stock')}>{this.props.supplier.status ? 'Dispo' : 'Pas de Stock'}</Card.Subtitle>
                    <Card.Text>
                        Dernière mise à jour : <br/>
                        {this.dateFormat}
                    </Card.Text>
                    <Card.Link href="#" onClick={() => this.setStatus()}>Edit</Card.Link>
                    <Card.Link href="#">Delete</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}

export default Supplier
