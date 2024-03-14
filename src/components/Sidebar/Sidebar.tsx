import { FC } from "react";
import { ISidebarProps } from "./interfaces";

import {
  SidebarContainer,
  SidebarAvatar,
  UserName,
  UserLogin,
  SubscribesWrapper,
} from "./styles";

const Sidebar: FC<ISidebarProps> = ({ userInfo }) => {
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
