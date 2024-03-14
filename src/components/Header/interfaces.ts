import { Dispatch, SetStateAction } from "react";

export interface IHeaderProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
