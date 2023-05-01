import { LabelAttributes } from "@/types/ui";
import { memo, useContext } from "react";
import FormControlContext from "./FormControlContext";

interface IFormLabel extends LabelAttributes {
    label: string;
    requiredClassName?: string;
}

export const FormLabel = memo(
    ({ label, requiredClassName, ...props }: IFormLabel) => {
        const { isRequired, id } = useContext(FormControlContext);
        return (
            <>
                <label htmlFor={id}  {...props}>
                    {label}
                    {isRequired && <span className={requiredClassName ?? 'text-red-500'}>*</span>}
                </label>
            </>
        );
    }
);
