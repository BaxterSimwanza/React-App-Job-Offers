import React from 'react'

export default function Offer(props) {
    return (
        <div>
            <h3>{props.post.name}</h3>
            <h4>{"Ajouté le : " + props.post.createdAt.slice(0, 10)}</h4>
            <p>{props.post.description}</p>
            <button>Postulé</button>
        </div>
    )
}
