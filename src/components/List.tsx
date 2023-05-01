import { UlAttributes } from "@/types/ui";
import { Fragment, ReactNode, memo, useCallback, useMemo } from "react";

type ListType<T extends unknown> = Omit<UlAttributes, "children" | 'key'> & {
    list: T[];
    key: keyof T | string | number;
    children: (item: T) => ReactNode;
};

const List = <T,>({
    list,
    key,
    children,
    ...props
}: ListType<T>) => {
    const memoChildren = useCallback(children, []);
    const memoList = useMemo(() => list, [list])
    return (
        <>
            {memoList?.length > 0 && (
                <ul {...props}>
                    {memoList.map((item, id) => (
                        <Fragment key={(typeof item === 'string' || typeof item === 'number') ? item : item[key]}>{memoChildren(item)}</Fragment>
                    ))}
                </ul>
            )}
        </>
    );
};


export default memo(List) as <T>(props: ListType<T>) => JSX.Element
