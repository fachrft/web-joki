const Input = (props) => {
    const {type, placeholder, name } = props
    return (
        <input name={name} type={type} placeholder={placeholder} />
    )
}

export default Input