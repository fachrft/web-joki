import '../../../styles/Elements/Button.css';

const Button = (props) => {
    const {type, title, onClick = () => {}} = props
    return (
        <button type={type} onClick={onClick}>{title}</button>
    )
}

export default Button