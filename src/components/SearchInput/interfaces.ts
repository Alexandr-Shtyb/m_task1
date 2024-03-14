import { Dispatch, SetStateAction } from "react";

export interface ISearchInputProps {
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
