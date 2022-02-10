import Styles from './cardPlans.module.css'

function CardPlans({ title,subtitle,status }) {

    return (
        <div className={`${Styles.container} ${Styles[status]}`}>
           <span className={Styles.subtitle}>{subtitle}</span>
           <p className={Styles.title}>{title}</p>
        </div>
    )
}

export default CardPlans
