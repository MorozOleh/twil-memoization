import { DivAttributes } from "@/types/ui";
import FormControlContext, { IFromControlContext } from "./FormControlContext";
import { v4 } from "uuid";
import { memo } from "react";
const id = v4();


export const FormControl = memo(({
    children,
    isDisabled,
    isInvalid,
    isRequired,
    id,
    isReadOnly,
    ...props
}: IFromControlContext & DivAttributes) => {
    return (
        <FormControlContext.Provider
            value={{ isDisabled, isInvalid, isReadOnly, isRequired, id }}
        >
            <div {...props}>{children}</div>
        </FormControlContext.Provider>
    );
});
