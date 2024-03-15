import SearchIcon from "@mui/icons-material/Search";

import { WrapperScreenSaver, TextScreenSaver } from "./styles";

const ScreenSaver = () => {
  return (
    <WrapperScreenSaver>
      <SearchIcon fontSize="large" />
      <TextScreenSaver>Start with searching a GitHub user</TextScreenSaver>
    </WrapperScreenSaver>
  );
};

export default ScreenSaver;
