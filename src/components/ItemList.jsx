import React from 'react'
import Item from './Item'


const ItemList = ({items}) => (
        <div className="row">
            {
                items.map((item, index) => (
                 <Item key={'Item'+item.id} title={item.title} pictureUrl={item.pictureUrl} price={item.price}/>
                ))
            }
        </div>
    );


export default ItemList
