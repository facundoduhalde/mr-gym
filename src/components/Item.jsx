import React from 'react'
import './Item.css'

const Item = ({
	id,
	title,
	price,
	pictureUrl
}) => (
        <div className="card" data-id={id}>
            <h5 className="card-title">{title}</h5>
            <img className="card-img-top" src={pictureUrl} />
            <p className="card-text">{price}</p>
        </div>
    )


export default Item
