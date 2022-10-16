import { atom } from 'recoil'

const storiesState = atom({
  key: 'storiesState',
  default: [],
})

const postsState = atom({
  key: 'postsState',
  default: [],
})

export { storiesState, postsState }
