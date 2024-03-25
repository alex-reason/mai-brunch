import { ChangeEventHandler } from "react"
interface FormInputProps {
    type: string,
    placeholder?: string,
    title: string,
    optionalClassName?: string,
    pattern?: string,
    min?: string,
    max?: string,
    value: string | number,
    handleChange: ChangeEventHandler
}
const FormInput = ({ type, placeholder, title, optionalClassName, pattern, min, max, value, handleChange }: FormInputProps) => {
    return (
        <div className="flex flex-col ">
            <p className="paragraph-2 font-medium">{title}</p>
            <input type={type} className={`bg-grey-1 px-2 py-1 ${optionalClassName}`} placeholder={placeholder || ''} pattern={pattern} min={min} max={max} value={value} onChange={handleChange} required>
            </input>
        </div>
    )
}

export default FormInput