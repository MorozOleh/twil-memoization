export interface IPersonBio {
  id: number;
  name: string;
  age: number;
  city: string;
}

export const PeopleBio: IPersonBio[] = [
  { id: 1, name: "John", age: 25, city: "New York" },
  { id: 2, name: "Jane", age: 30, city: "Los Angeles" },
  { id: 3, name: "Bob", age: 35, city: "Chicago" },
  { id: 4, name: "Sara", age: 28, city: "Houston" },
  { id: 5, name: "Mike", age: 32, city: "Miami" },
];

type TwilPointType =
  | string
  | {
      title: string;
      points: string[];
    };

export const twilPoints: TwilPointType[] = [
  {
    title: "1) There is three essential things to use:",
    points: [
      "* useMemo hook which helps memoize referenced value and avoid expansive data computation",
      "* useCallback which helps memoize callbacks when we pass any to child component",
      "* memo HOC with which help we can make our component check if prev props are the same or not and make assumption render or not a component",
    ],
  },
];
