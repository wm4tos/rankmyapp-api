const User = require('../modules/users/model');
const usersMock = require('../lib/users');

const seedUsers = force => new Promise(async (resolve) => {
  if (force) await User.deleteMany();

  const users = await User.find();

  if (users.length) return resolve(false);

  await User.insertMany(usersMock);

  return resolve(true);
});

module.exports = async (force) => {
  const u = await seedUsers(force);

  if (u) return process.stdout.write('Database seeded! :)\n');
  return null;
};
