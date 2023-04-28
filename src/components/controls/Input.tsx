import { InputAttributes } from '@/types/ui';
import { printLog } from '@/utils/common';
import { memo } from 'react';
// import { memo } from 'react';

interface IInputClasses {
    root?: string;
    input?: string;
    label?: string;
}

interface IInput extends InputAttributes {
    classes?: IInputClasses;
    title?: string;
}


//? If we don't want our component to rerender when something changed in top level component, 
//? we should make sure that our component is wrapped in memo HOC to prevent it from rerendering;


// export const Input = ({ classes, title, id, ...props }: IInput) => {
//     printLog('Input', 'violet')
//     return (
//         <div className={classes?.root || ""}>
//             {title && <label htmlFor={id} className={classes?.label || ''}>{title}</label>}
//             <input id={id} className={classes?.input || ''} {...props} />
//         </div>
//     )
// }


export const Input = memo(({ classes, title, id, ...props }: IInput) => {
    printLog('Input', 'violet')
    return (
        <div className={classes?.root || ""}>
            {title && <label htmlFor={id} className={classes?.label || ''}>{title}</label>}
            <input id={id} className={classes?.input || ''} {...props} />
        </div>
    )
});