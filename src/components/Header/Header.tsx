import { FC } from "react";
import Toolbar from "@mui/material/Toolbar";
import SearchInput from "../SearchInput/SearchInput";
import { IHeaderProps } from "./interfaces";

import { CustomAppBar, CustomGitHubIcon } from "./styles";

const Header: FC<IHeaderProps> = ({ value, setValue }) => {
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
