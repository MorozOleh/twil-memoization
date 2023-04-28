import List from "@/components/List";
import { twilPoints } from "@/constants/damyData";

export const Twil = () => {
    return (
        <div className=" bg-slate-800 p-3 rounded-md ">
            <h1 className="p-2 bg-slate-700 rounded-md ">What the beast🤓 is the memoization</h1>
            <List className="mt-2" list={twilPoints}>
                {(item) => (
                    <li>
                        {typeof item === "string" ? (
                            <p>{item}</p>
                        ) : (
                            <>
                                <h2 className="mt-2">{item.title}</h2>
                                <List className="pl-5" list={item.points}>
                                    {(el) => (
                                        <li>
                                            <p>{el}</p>
                                        </li>
                                    )}
                                </List>
                            </>
                        )}
                    </li>
                )}
            </List>
        </div>
    );
};
