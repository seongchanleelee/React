import styles from "./Button.module.css"
import propTypes from "prop-types";
function Button({text}) {
    return (
        <button className={styles.btn}>{text}</button>
    )
}

Button.propTypes = {
    text:propTypes.string.isRequired,
}

export default Button