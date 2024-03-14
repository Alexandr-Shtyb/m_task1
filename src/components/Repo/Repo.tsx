import { FC } from "react";
import { IRepoProps } from "./interfaces";

import { CustomListItem, RepoWrapper, RepoName } from "./styles";

const Repo: FC<IRepoProps> = ({ repoInfo }) => {
  return (
    <CustomListItem>
      <RepoWrapper>
        <RepoName>{repoInfo.name}</RepoName>
        <div>{repoInfo.description}</div>
      </RepoWrapper>
    </CustomListItem>
  );
};

export default Repo;
