import { FC } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Dispatch, SetStateAction } from "react";

import { CustomSearchInput } from "./styles";

type SearchInputProps = {
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const SearchInput: FC<SearchInputProps> = ({
  placeholder,
  value,
  setValue,
}) => {
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <CustomSearchInput
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleSearchInput(e)
      }
      placeholder={placeholder}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
