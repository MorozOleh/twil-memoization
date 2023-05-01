import { createContext } from "react";
import { v4 } from "uuid";

export interface IFromControlContext {
    isRequired?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    id?: string

}

const FormControlContext = createContext<IFromControlContext>({
    isRequired: false,
    isInvalid: false,
    isDisabled: false,
    isReadOnly: false,
    id: ''
})

export default FormControlContext;