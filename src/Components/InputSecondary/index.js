import {React} from 'react'
import Styles from './inputSecondary.module.css'
import PropTypes from 'prop-types';

const InputSecondary = (props) => {


    return (
        <div ref={props?.reference} data-target={props?.target} className={`${Styles.inputSecondaryContainer} ${Styles[props.state]} ${Styles[props.bottomDisplay]}`}>
            <div ref={props?.reference} data-target={props?.target} className={Styles.topLabel}>
                {props.topLabel}
            </div>
            <input 
            ref={props?.reference}
            data-target={props?.target}
            className={Styles.input} 
            type={props.type}
            autocomplete={props.autoComplete}
            value={props.value ||""} 
            onFocus={(event)=>{props.setFocus && props.setFocus(event.target.value)}}
            onChange={event => { props.setValue(event.target.value) }}  
            placeholder={props.placeholder} />
            <div ref={props?.reference} data-target={props?.target} className={Styles.bottomLabel}>
                {props.bottomLabel}
            </div>
        </div>
    );
}

InputSecondary.propTypes = {
    topLabel: PropTypes.string,
    bottomLabel: PropTypes.string,
    placeholder: PropTypes.string,
};


export default InputSecondary
