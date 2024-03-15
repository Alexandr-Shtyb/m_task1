import styled from "@emotion/styled";
import Pagination from "@mui/material/Pagination";

export const MainBlockContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 150px 25px 0 25px;
  min-height: 100vh;
  width: 100%;
`;

export const RepoCounter = styled("div")`
  font-weigth: 700;
  font-size: 28px;
  margin-bottom: 10px;
`;

export const CustomPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;
