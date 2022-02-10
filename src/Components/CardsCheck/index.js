import { useState } from 'react'
import Styles from './cardsCheck.module.css'

function CardsCheck({ title,subtitle }) {
    const [value, setValue] = useState(300)
    const [total, setTotal] = useState(600)
    return (
        <div className={`${Styles.container}`}>
            <div className={Styles.top}>
                <strong className={Styles.title}>{title}</strong>
                <span className={Styles.subtitle}>{subtitle}</span>
            </div>
            <div className={Styles.bottom}>
                <div className={Styles.textBar}>
                    <strong className={Styles.check}>Check-ins</strong>
                    <strong><span className={Styles.blue}>{value}</span>/{total}</strong>
                </div>
                <div className={Styles.progress}>
                    <div className={Styles.inner}></div>
                </div>
            </div>
        </div>
    )
}

export default CardsCheck
