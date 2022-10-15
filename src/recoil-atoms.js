import { atom } from 'recoil'

const storiesState = atom({
  key: 'storiesState',
  default: [],
})

export { storiesState }
