// import { emailTemplate } from './js-foundation/01-template';
// import './js-foundation/02-destructuring';
// import { getUserById, users, IUser } from './js-foundation/03-callbacks';
import { getAge, getUUID } from './plugins';
import { buildMakePerson } from './js-foundation/05-factoring';
// import { emailTemplate } from './js-foundation/01-template';

// import pokemonById from './js-foundation/06-promises';

// import { buildLogger } from './plugins';

// const logger = buildLogger('app');

// logger.log('Application started');
// logger.error('Error occurred in application');

// pokemonById(1).then(console.log);

// console.log(emailTemplate);

// getUserById(1, (err: string, user: IUser) => {
//   if (err) {
//     throw new Error(err);
//   }

//   console.log(user);
// });
const makePerson = buildMakePerson({ getUUID, getAge });
const john = makePerson({ name: 'Jonh', birthday: '1985-10-21' });
console.log(john);
