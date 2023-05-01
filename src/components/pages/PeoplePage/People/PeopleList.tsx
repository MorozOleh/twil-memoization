import { IPersonBio } from "@/constants/damyData";
import { Person } from "./Person";
import { onDeleteType } from "@/types/utils";
import { printLog } from "@/utils/common";
import { memo } from "react";
import List from "@/components/List";
import { useSetState } from "@/hooks/useSetState";




interface IPeopleList {
    people: IPersonBio[];
    onDelete: onDeleteType
}

// export const PeopleList = ({ people, onDelete }: IPeopleList) => {
//     printLog('PeopleList', 'orange')
//     return (
//         <ul className="flex gap-5 bg-slate-800 p-3 flex-wrap rounded-md">
//             {/* This has the worse effect on our performance */}
//             {/* {people.map((person) => <Person onDelete={onDelete} key={uuidv4()} person={person} />)} */}
//             {/* This approach is not ideal, and it is better to avoid it as much as possible */}
//             {/* {people.map((person, index) => <Person onDelete={onDelete} key={index} person={person} />)} */}
//             {/* This is the best scenario and wi should follow the rule of thumb */}
//             {people.map((person) => <Person onDelete={onDelete} key={person.id} person={person} />)}
//         </ul>
//     )
// }

// this is the best scenario;
export const PeopleList = memo(({ people, onDelete }: IPeopleList) => {
    const [state, setState] = useSetState({ age: 0, name: 'Tania' })
    printLog('PeopleList', 'orange')
    return (
        <List className="flex gap-5 bg-slate-800 p-3 flex-wrap rounded-md" key='id' list={people} >
            {(person) => <Person onDelete={onDelete} person={person} />}
        </List>
        // <ul className="flex gap-5 bg-slate-800 p-3 flex-wrap rounded-md">
        //     {/* This has the worse effect on our performance */}
        //     {/* {people.map((person) => <Person onDelete={onDelete} key={uuidv4()} person={person} />)} */}
        //     {/* This approach is not ideal, and it is better to avoid it as much as possible */}
        //     {/* {people.map((person, index) => <Person onDelete={onDelete} key={index}  person={person} />)} */}
        //     {/* This is the best scenario and wi should follow the rule of thumb */}
        //     {people.map((person) => <Person onDelete={onDelete} key={person.id} person={person} />)}
        // </ul>
    )
})
