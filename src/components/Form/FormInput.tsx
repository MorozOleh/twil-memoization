import { InputAttributes } from "@/types/ui";
import { forwardRef, memo, useContext } from "react";
import FormControlContext from "./FormControlContext";

export const FormInput = memo(forwardRef<HTMLInputElement, InputAttributes>(
    (props: InputAttributes, ref) => {
        const { id } = useContext(FormControlContext);
        return <input id={id} ref={ref} {...props} />;
    }
));