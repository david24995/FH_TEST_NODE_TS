export interface IUser {
  id: number;
  name: string;
}

export const users: IUser[] = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
  },
];

export function getUserById(id: number, callback: Function) {
  const user = users.find((user) => user.id === id);

  if (!user) {
    return callback('User not found');
  }

  return callback(null, user);
}
