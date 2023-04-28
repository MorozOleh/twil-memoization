import { Input } from "@/components/controls/Input";
import { IPersonBio } from "@/constants/damyData";
import { onAddPersonType } from "@/types/utils";
import { printLog } from "@/utils/common";
import {
    ChangeEvent,
    FormEvent,
    memo,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";

//! First of all we need wrap all callback which are passed to another component;

//? if we wanna make sure that our component doesn't receive any referenced props
//? such as classes object we have two choices how to prevent it from rendering:
//! create an object out of an component;
//! create an object within component but wrap it with useMemo hook;

const classes = {
    input: "w-full py-1 text-gray-600 indent-2 bg-gray-300 rounded-md mt-1",
    label: "pl-2",
};

// const classes = useMemo(
//     () => ({
//         input: "w-full py-1 text-gray-600 indent-2 bg-gray-300 rounded-md mt-1",
//         label: "pl-2",
//     }),
//     []
// );

//     const classes = useMemo(
//     () => ({
//         input: "w-full py-1 text-gray-600 indent-2 bg-gray-300 rounded-md mt-1",
//         label: "pl-2",
//     }),
//     []
// );

interface INewPerson {
    onAddPerson: onAddPersonType;
}

const defaultForm: IPersonBio = {
    id: 0,
    age: 0,
    name: "",
    city: "",
};

export const NewPerson = memo(({ onAddPerson }: INewPerson) => {
    printLog("New Person", "tomato");
    const [form, setForm] = useState<IPersonBio>(defaultForm);
    const [random, setRandomNumber] = useState(0);

    //! So bad practice, we have to avoid it in case we pass it to a child;

    // const handleChange = ({
    //     target: { name, value },
    // }: ChangeEvent<HTMLInputElement>) => {
    //     setForm((f) => ({
    //         ...f,
    //         [name]: name === "age" ? Number(value) : value,
    //     }));
    // };

    //? Not so bad, but it will not help use avoid rerendering;

    // const handleChange = useCallback(
    //     ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    //         setForm({
    //             ...form,
    //             [name]: name === "age" ? Number(value) : value,
    //         });
    //     },
    //     [form]
    // );

    // const classes = useMemo(
    //     () => ({
    //         input: "w-full py-1 text-gray-600 indent-2 bg-gray-300 rounded-md mt-1",
    //         label: "pl-2",
    //     }),
    //     []
    // );

    const handleChange = useCallback(
        ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
            setForm((f) => ({
                ...f,
                [name]: name === "age" ? Number(value) : value,
            }));
        },
        []
    );

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAddPerson({ ...form, id: Math.random() });
    };

    const handleRandom = () => {
        //? if we use button in form make sure that button has type button;
        setRandomNumber(Math.random());
    };

    useEffect(() => {
        printLog(`Random ${random}`, "brown");
    }, [random]);

    return (
        <form
            onSubmit={handleSubmit}
            className="p-3 w-full mt-3 flex flex-col gap-3 rounded-md bg-slate-800"
        >
            <Input
                id="name-field"
                classes={classes}
                // classes={{
                //     input:
                //         "w-full py-1 text-gray-600 indent-2 bg-gray-300 rounded-md mt-1",
                //     label: "pl-2",
                // }}
                title="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
            />
            <Input
                id="city-filed"
                classes={classes}
                // classes={{
                //     input:
                //         "w-full py-1 text-gray-600 indent-2 bg-gray-300 rounded-md mt-1",
                //     label: "pl-2",
                // }}
                title="City"
                name="city"
                value={form.city}
                onChange={handleChange}
            />
            <Input
                id="age-field"
                classes={classes}
                // classes={{
                //     input:
                //         "w-full py-1 text-gray-600 indent-2 bg-gray-300 rounded-md mt-1",
                //     label: "pl-2",
                // }}
                title="Age"
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
            />
            <div className=" relative flex justify-center w-full">
                <button
                    type="submit"
                    className="bg-gradient-to-r mt-2 mx-auto from-cyan-500 hover:from-cyan-600 to-blue-500 hover:to-blue-600 w-max py-2 px-3 transition-colors rounded-md"
                >
                    😄 Add a person
                </button>
                <button
                    type="button"
                    onClick={handleRandom}
                    className="bg-gradient-to-r from-cyan-800 hover:from-cyan-900 to-blue-800 hover:to-blue-900 w-max py-2 px-3 transition-colors rounded-md absolute top-1/2 -translate-y-1/2 right-0"
                >
                    Random
                </button>
            </div>
        </form>
    );
});
