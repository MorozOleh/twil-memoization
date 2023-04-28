import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";

export type InputAttributes = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type UlAttributes = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;
