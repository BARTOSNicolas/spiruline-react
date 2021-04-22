import React from 'react';
import { format } from 'timeago.js';

import './Supplier.scss';
import {Card} from "react-bootstrap";



class Supplier extends React.Component{
    dateFormat = format(this.props.supplier.checkedAt, 'fr_FR')
    options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

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
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}

export default Supplier
