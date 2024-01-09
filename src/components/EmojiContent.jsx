import React from 'react';
import Styles from "./EmojiContent.module.css"


const EmojiContent = (props) => {

    return (
        <>
            <dt className={`${Styles.wrapper} ${Styles.spn}`}>
                <span className={Styles.emoji} role="img" aria-label="Tense Biceps">
                    {props.emoji}
                </span>
                <span className={Styles.spn}>{props.name}</span>
            </dt >
            <dd className={Styles.meaningWrapper}>
                {props.meaning}
            </dd>
        </>
    )
}

export default EmojiContent;