import { faker } from '@faker-js/faker'
import { getRandomIntInclusive } from './random-int'

export const getUserData = () => ({
  userId: faker.datatype.uuid(),
  username: faker.internet.userName(),
  avatar: faker.image.avatar(),
  postTitle: faker.lorem.sentence(getRandomIntInclusive(2, 40)),
})
