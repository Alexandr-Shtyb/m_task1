import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Spin from "../../components/Spin/Spin";
import useDebouncedValue from "../../hooks/useDebouncedValue";
import { githubApi } from "../../api/githubApi";
import MainBlock from "../../components/MainBlock/MainBlock";
import Stack from "@mui/material/Stack";
import { IUser } from "../../api/interfaces";
import { IRepos } from "../../api/interfaces";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";

import { AppWrapper, Error } from "./styles";

const MainPage = () => {
  const [userTrigger, userResult] = githubApi.useLazyGetUserQuery();
  const [reposTrigger, reposResult] = githubApi.useLazyGetReposQuery();

  const [userSearchValue, setUserSearchValue] = useState("");
  const [userInfo, setUserInfo] = useState<IUser>();
  const [reposInfo, setReposInfo] = useState<IRepos[]>();
  const debouncedSearchTerm = useDebouncedValue(userSearchValue, 500);

  const { data, error, isFetching } = userResult;
  const {
    data: reposData,
    error: reposError,
    isFetching: reposIsFetching,
  } = reposResult;

  useEffect(() => {
    setUserInfo(data);
  }, [data]);

  useEffect(() => {
    setReposInfo(reposData);
  }, [reposData]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      userTrigger(debouncedSearchTerm);
      reposTrigger(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <AppWrapper maxWidth={false}>
      <Header value={userSearchValue} setValue={setUserSearchValue} />

      {(isFetching || reposIsFetching) && <Spin />}
      {(error || reposError) && <Error>Sorry, an error has occurred.</Error>}

      {!userInfo || !reposInfo ? (
        (!error || !reposError) && <ScreenSaver />
      ) : (
        <Stack direction="row">
          {userInfo && <Sidebar userInfo={userInfo} />}
          {reposInfo && <MainBlock reposInfo={reposInfo} />}
        </Stack>
      )}
    </AppWrapper>
  );
};

export default MainPage;
