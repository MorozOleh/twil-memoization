import { UlAttributes } from "@/types/ui";
import { Fragment, ReactNode } from "react";

type ListType<T extends unknown> = Omit<UlAttributes, "children"> & {
    list: T[];
    key?: keyof T;
    children: (item: T) => ReactNode;
};

const List = <T,>({
    list,
    key,
    children,
    ...props
}: ListType<T>) => {
    return (
        <>
            {list?.length > 0 && (
                <ul {...props}>
                    {list?.map((item, id) => (
                        <Fragment key={key || id}>{children(item)}</Fragment>
                    ))}
                </ul>
            )}
        </>
    );
};

export default List
