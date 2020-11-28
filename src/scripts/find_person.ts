import { PeopleRepositoryInterface } from '../types';
import { app } from '../app/app';

const peopleRepository: PeopleRepositoryInterface = app.get('PeopleRepositoryInterface');

(async function(){
    try {
        const peopleCount = await peopleRepository.count();
        const people = peopleRepository.all();

        for await (const person of people) {
            console.log(`${person.name} (${person.gender})`);
        }

        console.log(`There are ${peopleCount} characters`);
    } catch (error) {
        console.log(String(error));
    }
})();
