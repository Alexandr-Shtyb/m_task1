import { FC } from "react";
import { IUser } from "../../api/interfaces";

import {
  SidebarContainer,
  SidebarAvatar,
  UserName,
  UserLogin,
  SubscribesWrapper,
} from "./styles";

type SidebarProps = {
  userInfo: IUser;
};

const Sidebar: FC<SidebarProps> = ({ userInfo }) => {
  return (
    <SidebarContainer>
      <SidebarAvatar src={userInfo.avatar_url} />

      <UserName>{userInfo.name}</UserName>
      <UserLogin>{userInfo.login}</UserLogin>

      <SubscribesWrapper>
        <div>{userInfo.followers} Followers</div>
        <div>{userInfo.following} Following</div>
      </SubscribesWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
