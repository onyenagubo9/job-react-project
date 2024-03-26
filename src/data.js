// * fake data

import { faker } from '@faker-js/faker';


export  function createRandomUser() {
  return (
    
    <div></div>

      
    
  );
}


export const USERS = faker.helpers.multiple(createRandomUser, {
    count: 5,
});
