import React from 'react'
import Item from './Item'


const ItemList = ({items}) => (
        <div className="row">
            {
                items.map((item, index) => (
                 <Item title={item.title} pictureUrl={item.pictureUrl} price={item.price}/>
                ))
            }
        </div>
    );


export default ItemList
