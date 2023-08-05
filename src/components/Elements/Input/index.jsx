import Label from "./Label";
import Input from "./Input";
import '../../../styles/Elements/Input.css'

const InputForm = (props) => {
    const {name, text, type, placeholder, value='', onChange} = props
    return(
        <div className="container-input">
            <Label htmlFor={name} text={text}>{text}</Label>
            <Input type={type} value={value} name={name} placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}

export default InputForm;