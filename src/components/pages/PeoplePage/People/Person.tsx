import { IPersonBio } from "@/constants/damyData";
import { onDeleteType } from "@/types/utils";
import { printLog } from "@/utils/common";
import { memo } from "react";
// import { memo } from "react";

export interface IPerson {
    person: IPersonBio;
    onDelete: onDeleteType
}


export const Person = memo(({ person, onDelete }: IPerson) => {
    printLog('Person', 'green')

    return (
        <li className="p-3 rounded-md bg-gray-500  w-[calc((100%-40px)/3)] ">
            <div className="flex justify-between items-center">
                <h2>{person.name}</h2>
                <button onClick={() => onDelete(person.id)} className="p-2 bg-gray-600 hover:bg-gray-700 transition-colors rounded-md leading-none text-end">
                    🥲
                </button>
            </div>
            <div className="p-2 mt-3 bg-gray-700 rounded-md ">
                <p>Born in: {person.city}</p>
                <p>Age: {person.age} 🦜</p>
            </div>
        </li>
    );
})
