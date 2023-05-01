import { PAGE } from "./routes";

interface INavigationHeader {
  // such use of operators allows us to retrieve all values of an object;
  // keep in mind that we should use as const operator on the object
  // to have a right inferring of all values as unions not only actual type (string/number etc...)
  href: (typeof PAGE)[keyof typeof PAGE];
  title: string;
}

export const NAVIGATION_HEADER: INavigationHeader[] = [
  { href: "/", title: "Home" },
  { href: "/twil", title: "Memoization twil" },
  { href: "/people", title: "People" },
  { href: "/typescript", title: "Typescript twil" },
  { href: "/forms", title: "Forms" },
];
