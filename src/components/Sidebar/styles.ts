import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";

export const SidebarContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 150px 25px 0 25px;
  max-width: 250px;
  min-height: 100vh;
`;

export const SidebarAvatar = styled(Avatar)`
  width: 150px;
  height: 150px;
`;

export const UserName = styled("div")`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const UserLogin = styled("div")`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const SubscribesWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;
