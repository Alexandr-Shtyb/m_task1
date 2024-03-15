import { FC } from "react";
import { IRepos } from "../../api/interfaces";

import { CustomListItem, RepoWrapper, RepoName } from "./styles";

type RepoProps = {
  repoInfo: IRepos;
};

const Repo: FC<RepoProps> = ({ repoInfo }) => {
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
