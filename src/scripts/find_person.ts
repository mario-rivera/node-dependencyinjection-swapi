import { app } from '../app/app';

const peopleRepository = app.get('PeopleRepositoryInterface');

console.log(peopleRepository);