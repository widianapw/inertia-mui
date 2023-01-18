import PropTypes from "prop-types";
import {useFormProvider} from "@/components/inertia-form/FormProvider";
import {TextField} from "@mui/material";

INFTextField.propTypes = {
    name: PropTypes.string.isRequired,
    ...TextField.props
}

export default function INFTextField({
                                         name,
                                         ...props
                                     }) {
    const {methods} = useFormProvider()
    const {data, setData, errors} = methods
    return <TextField
        value={data[name]}
        onChange={(event) => {
            setData(name, event.target.value)
        }}
        error={!!errors?.[name]}
        helperText={errors[name]}
        {...props}
    />

}
