import { FC } from "react";
import Toolbar from "@mui/material/Toolbar";
import SearchInput from "../SearchInput/SearchInput";
import { Dispatch, SetStateAction } from "react";

import { CustomAppBar, CustomGitHubIcon } from "./styles";

type HeaderProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const Header: FC<HeaderProps> = ({ value, setValue }) => {
  return (
    <CustomAppBar>
      <Toolbar>
        <CustomGitHubIcon fontSize="large" />

        <SearchInput
          placeholder="Enter GitHub username"
          value={value}
          setValue={setValue}
        />
      </Toolbar>
    </CustomAppBar>
  );
};

export default Header;
