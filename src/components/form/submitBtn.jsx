import styles from  './submit_btn.module.scss'

const SubmitButton = ({text}) => {
    return (
       
            <button className={styles.btn_form}>{text}</button>
    )
}

export default SubmitButton