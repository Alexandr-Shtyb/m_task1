import styled from "@emotion/styled";
import ListItem from "@mui/material/ListItem";

export const CustomListItem = styled(ListItem)`
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 10px;
  margin: 10px 0;
`;

export const RepoWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RepoName = styled("div")`
  font-weigth: 700;
  font-size: 20px;
  margin-bottom: 10px;
`;
