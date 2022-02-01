import { useField } from "formik";

const Select = ({...props}) =>{
    const [field, meta] = useField(props)
    return(
        <div>
            <label style={{fontSize: 20}}>{props.label}: </label>
            <select {...field} {...props}></select>
        </div>
    )
}

export default Select