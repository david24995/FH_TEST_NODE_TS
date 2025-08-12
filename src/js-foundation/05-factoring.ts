interface buildMakePersonOptions {
  getUUID: Function;
  getAge: Function;
}

export const buildMakePerson = ({
  getUUID,
  getAge,
}: buildMakePersonOptions) => {
  return ({ name, birthday }: { name: string; birthday: string }) => {
    return {
      id: getUUID(),
      name,
      birthday,
      age: getAge(birthday),
    };
  };
};
