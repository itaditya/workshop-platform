const faker = require('faker');

function generateData() {
  const users = [];

  for (let i = 20; i >= 0; i--) {
    const user = faker.helpers.userCard();
    const id = faker.helpers.slugify(user.username);

    const finalUser = {
      id,
      ...user,
    };
    users.push(finalUser);
  }

  const data = {
    users,
  };

  return data;
}

module.exports = generateData;
