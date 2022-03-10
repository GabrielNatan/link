import Styles from './circleBar.module.css'
function CircleBar({ image,title,subtitle = " ",num}) {

    return (
        <div className={`${Styles.container}`}>
            <img src={image} />
            <span className={Styles.title}>{title}</span>
            <div className={Styles.middle}>
                
            </div>
            <div className={Styles.bottom}>
                <strong>102.9M <span>/{num}</span></strong> 
                <span className={Styles.spanGreen}>{subtitle}</span>
            </div>
        </div>
    )
}

export default CircleBar
