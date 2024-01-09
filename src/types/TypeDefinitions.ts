export type User = {
  id: number;
  name: string;
};

export type UserRight = ["success", User];
export type UserLeft = ["failure", Error];

export type UserEither = UserRight | UserLeft;
