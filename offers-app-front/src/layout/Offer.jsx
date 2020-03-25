import React from 'react'

export default function Offer(props) {
    return (
        <div>
            <h2>{props.post.name}</h2>
            <h4>{"Ajouté le : " + props.post.createdAt.slice(0, 10)}</h4>
            <h3>{props.post.description}</h3>
            <button>Postulé</button>
        </div>
    )
}
