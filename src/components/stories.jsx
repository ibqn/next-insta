import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { storiesState } from 'recoil-atoms'
import Image from 'next/future/image'
import { getUserData } from 'util/user-data'

const populateStories = () =>
  Array.from({ length: 30 }).map(() => getUserData())

const Stories = () => {
  const [stories, setStories] = useRecoilState(storiesState)

  useEffect(() => {
    const newSories = populateStories()
    setStories(newSories)
  }, [])

  return (
    <div className="flex gap-4 overflow-x-scroll rounded-lg border bg-white p-5 scrollbar-thin scrollbar-thumb-gray-300">
      {stories?.map((story) => {
        const { userId, username, avatar } = story
        return (
          <div key={userId} className="flex flex-col gap-2">
            <Image
              priority
              height="83"
              width="83"
              className="rounded-full border-[3px] border-red-500 p-[1.5px]"
              src={avatar}
              alt="Avatar"
            />
            <p className="w-[60px] truncate text-xs">{username}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Stories
