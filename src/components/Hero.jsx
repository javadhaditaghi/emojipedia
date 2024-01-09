import React from 'react';
import Styles from "./Hero.module.css"

const Hero = () => {

    return (
        <h1 className={Styles.title}>
            <span className={Styles.titleInner}>emojipedia</span>
        </h1>
    )
}

export default Hero;