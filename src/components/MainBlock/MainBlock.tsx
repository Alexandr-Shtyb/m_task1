import { FC, useState, useEffect } from "react";
import List from "@mui/material/List";
import Repo from "../Repo/Repo";
import { IRepos } from "../../api/interfaces";
import usePagination from "../../hooks/usePagination";
import { ITEMS_PER_PAGE_SEARCH_REPOS } from "../../constants/global";

import { MainBlockContainer, RepoCounter, CustomPagination } from "./styles";

type MainBlockProps = {
  reposInfo: IRepos[];
};

const MainBlock: FC<MainBlockProps> = ({ reposInfo }) => {
  const [page, setPage] = useState(1);

  const { displayedRepos, count } = usePagination<IRepos>(
    reposInfo,
    page,
    ITEMS_PER_PAGE_SEARCH_REPOS,
  );

  const isVisiblePagination = displayedRepos.length > 0;

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

      {isVisiblePagination && (
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
