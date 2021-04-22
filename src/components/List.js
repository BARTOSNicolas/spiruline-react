import React from 'react';

import Supplier from "./Supplier";

import './List.scss';

class List extends React.Component{

    listItem = this.props.suppliers.map(supplier => {
        return <Supplier key={supplier.id} supplier={supplier}/>
    });


    render(){
        return(
            <div>
                <h2>Suppliers List</h2>
                <div className="listItem">
                    {this.listItem}
                </div>
            </div>
        )
    }
}

export default List
