export interface IUser {
  avatar_url: string;
  name: string;
  login: string;
  followers: number;
  following: number;
}

export interface IRepos {
  id: number;
  name: string;
  description: string;
}
