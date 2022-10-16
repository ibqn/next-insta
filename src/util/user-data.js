import { faker } from '@faker-js/faker'

export const getUserData = () => ({
  userId: faker.datatype.uuid(),
  username: faker.internet.userName(),
  avatar: faker.image.avatar(),
})
