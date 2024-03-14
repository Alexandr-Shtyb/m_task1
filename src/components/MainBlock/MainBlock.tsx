import { FC, useState, useEffect } from "react";
import { IMainBlockProps } from "./interfaces";
import List from "@mui/material/List";
import Repo from "../Repo/Repo";
import { IRepos } from "../../api/interfaces";

import { MainBlockContainer, RepoCounter, CustomPagination } from "./styles";

const MainBlock: FC<IMainBlockProps> = ({ reposInfo }) => {
  const [page, setPage] = useState(1);

  const perPage = 10;
  const count = Math.ceil(reposInfo?.length / perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const displayedRepos = reposInfo?.slice(startIndex, endIndex);

  const handleChangePage = (e: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  useEffect(() => {
    setPage(1);
  }, [reposInfo]);

  return (
    <MainBlockContainer>
      <RepoCounter>Repositories: {reposInfo.length}</RepoCounter>

      <List>
        {displayedRepos.map((repo: IRepos) => {
          return <Repo key={repo.id} repoInfo={repo} />;
        })}
      </List>

      {displayedRepos.length > 0 && (
        <CustomPagination
          size="large"
          count={count}
          page={page}
          onChange={handleChangePage}
        />
      )}
    </MainBlockContainer>
  );
};

export default MainBlock;
