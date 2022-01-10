import Styles from './ticket.module.css'

function Ticket({ title,data }) {

    return (
        <div className={`${Styles.container} ${Styles.red}`}>
            <div className={Styles.top}>
                {title}
            </div>
            <div className={Styles.bottom}>
                <strong>{data.sum}</strong>
                <span>{data.percent}</span>
            </div>
        </div>
    )
}

export default Ticket
