import React from 'react';
import Styles from "./Dictionary.module.css"


const Dictionary = (props) => {

    return (
        <dl className={Styles.dictionary}>{props.children}</dl>
    )
}

export default Dictionary;