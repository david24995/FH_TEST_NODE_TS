export const getAge = (birthday: string) => {
  return obtenerEdad(birthday);
};

function obtenerEdad(dateString: string) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getUTCFullYear() - birthDate.getUTCFullYear();
  var month = today.getUTCMonth() - birthDate.getUTCMonth();
  if (
    month < 0 ||
    (month === 0 && today.getUTCDate() < birthDate.getUTCDate())
  ) {
    age--;
  }
  return age;
}
