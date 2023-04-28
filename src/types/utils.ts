import { IPersonBio } from "@/constants/damyData";

export type onDeleteType = (id: number) => void;
export type onAddPersonType = (person: IPersonBio) => void;
export type printLogType = (value: any, color?: string) => void;
