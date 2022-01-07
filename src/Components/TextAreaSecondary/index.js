import React from 'react'
import Styles from './textAreaSecondary.module.css'



export const TextAreaSecondary = (props) => {
    return (
        <div className={`${Styles.TextAreaSecondaryContainer} ${Styles[props.state]}`}>
            <div className={Styles.topLabel}>
                {props.title}
            </div>
            <textarea className={Styles.textArea} type='text' value={props.value} onChange={(e)=>props.setValue(e.target.value)} placeholder={props.placeholder} />
        </div>
    );
}

