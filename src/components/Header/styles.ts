import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import GitHubIcon from "@mui/icons-material/GitHub";

export const CustomAppBar = styled(AppBar)`
  .MuiAppBar-root {
    padding: 0;
  }
`;

export const SearchIconWrapper = styled("div")`
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomGitHubIcon = styled(GitHubIcon)`
  padding: 10px 40px;
`;
