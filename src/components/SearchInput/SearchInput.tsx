import { FC } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { ISearchInputProps } from "./interfaces";

import { CustomSearchInput } from "./styles";

const SearchInput: FC<ISearchInputProps> = ({
  placeholder,
  value,
  setValue,
}) => {
  return (
    <CustomSearchInput
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value)
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
