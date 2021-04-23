import React from 'react';

import Supplier from "./Supplier";

import './List.scss';

class List extends React.Component{

    setList() {
        return this.listItem = this.props.suppliers.map(supplier => {
            return <Supplier key={supplier.id} supplier={supplier}/>
        });
    }

    render(){
        return(
            <div>
                <h2>Suppliers List</h2>
                <div className="listItem">
                    {this.setList()}
                </div>
            </div>
        )
    }
}

export default List
