import { useCallback, useEffect, useState } from "react";
import { PeopleList } from "./People/PeopleList";
import { PeopleBio } from "@/constants/damyData";
import { onAddPersonType, onDeleteType } from "@/types/utils";
import { printLog } from "@/utils/common";
import { NewPerson } from "./NewPerson";

const PeoplePage = () => {
    const [people, setPeople] = useState(PeopleBio);
    const [random, setRandomNumber] = useState(0);

    printLog('Parent', 'red')

    // const handleDelete: onDeleteType = (idx) => {
    //     setPeople((st) => st.filter(({ id }) => id !== idx));
    // };

    const handleDelete: onDeleteType = useCallback((idx) => {
        setPeople((st) => st.filter(({ id }) => id !== idx));
    }, [])


    // this is the worse scenario;
    // const onAddPerson: onAddPersonType = (person) => {
    //     setPeople(st => [...st, person])
    // }


    // this is neutral scenario its better than nothing;
    // const onAddPerson: onAddPersonType = useCallback((person) => {
    //     setPeople([...people, person])
    // }, [people])



    // this is the best scenario;
    const onAddPerson: onAddPersonType = useCallback((person) => {
        setPeople(st => [...st, person])
    }, [])


    const handleRandom = () => {
        //? if we use button in form make sure that button has type button;
        setRandomNumber(Math.random());
    };

    useEffect(() => {
        printLog(`Random Top level ${random}`, 'grenade')
    }, [random])

    return <>
        <PeopleList people={people} onDelete={handleDelete} />
        <NewPerson onAddPerson={onAddPerson} />
        <div className="flex justify-center mt-3">
            <button
                type='button'
                onClick={handleRandom}
                className="bg-gradient-to-r from-cyan-800 hover:from-cyan-900 to-blue-800 hover:to-blue-900 w-max py-2 px-3 transition-colors rounded-md"
            >
                Random
            </button>
        </div>
    </>
};

export default PeoplePage;
