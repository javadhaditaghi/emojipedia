import React from 'react';
import Styles from "./Card.module.css"

const Card = (props) => {

    return (
        <div className={Styles.term}>
            {props.children}
        </div>
    )
}

export default Card;