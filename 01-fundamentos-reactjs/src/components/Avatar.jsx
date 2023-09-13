/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styles from './Avatar.module.css'

export function Avatar({hasBorder = true, src}) {
    
    return (
        <img className={hasBorder ? styles.authorWithBorder : styles.avatar}
        src={src}/>
    );
}