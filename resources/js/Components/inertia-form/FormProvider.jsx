import PropTypes from 'prop-types';
import {createContext, useContext} from "react";
// form

// ----------------------------------------------------------------------

FormProvider.propTypes = {
    children: PropTypes.node, methods: PropTypes.object, onSubmit: PropTypes.func,
};

const FormContext = createContext(null)
export default function FormProvider({children, onSubmit, methods}) {
    return (<FormContext.Provider value={{
        methods
    }}>
        <form onSubmit={onSubmit}>{children}</form>
    </FormContext.Provider>);
}


export const useFormProvider = () => {
    const context = useContext(FormContext)
    if (!context) {
        throw new Error('useFormProvider must be used within a FormProvider')
    }
    return context
}
