interface buildMakePersonOptions {
  getUUID: () => string;
  getAge: (birthday: string) => number;
}

interface personOptions {
  name: string;
  birthday: string;
}

export const buildMakePerson = ({
  getUUID,
  getAge,
}: buildMakePersonOptions) => {
  return ({ name, birthday }: personOptions) => {
    return {
      id: getUUID(),
      name,
      birthday,
      age: getAge(birthday),
    };
  };
};
