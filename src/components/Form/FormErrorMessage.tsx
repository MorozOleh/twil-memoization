import { useContext } from 'react';
import FormControlContext from './FormControlContext';
import { SpanAttributes } from '@/types/ui';

interface IFormErrorMessage extends SpanAttributes {
    message: string;
}

export const FormErrorMessage = ({ message, ...props }: IFormErrorMessage) => {
    const { isInvalid } = useContext(FormControlContext)
    return (
        <>
            {isInvalid && <span {...props}>{message}</span>}
        </>
    )
}
