import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { postsState } from 'recoil-atoms'
import Image from 'next/future/image'
import { getUserData } from 'util/user-data'
import MoreOptionsIcon from './more-options.svg'

const populatePosts = () =>
  Promise.all(
    Array.from({ length: 8 }).map(async (_, index) => {
      const postImage = (await import(`images/posts/post${index + 1}.jpg`))
        .default

      return {
        postImage,
        ...getUserData(),
      }
    })
  )

const Posts = () => {
  const [posts, setPosts] = useRecoilState(postsState)

  useEffect(() => {
    const fetchData = async () => {
      const newPosts = await populatePosts()
      setPosts(newPosts)
    }

    fetchData()
  }, [])

  return (
    <div className="mt-5 flex flex-col gap-4">
      {posts.map((post) => {
        const { userId, username, avatar, postImage } = post

        return (
          <div
            className="flex flex-col rounded-lg border bg-white"
            key={userId}
          >
            <div className="flex items-center gap-4 py-2 px-3">
              <Image
                priority
                height="34"
                width="34"
                className="m-1.5 rounded-full"
                src={avatar}
                alt="Avatar"
              />
              <div className="">
                <p className="text-sm font-bold">{username}</p>
                <p className="text-xs">Original Audio</p>
              </div>
              <MoreOptionsIcon className="ml-auto" />
            </div>
            <Image priority src={postImage} alt="Post" />
          </div>
        )
      })}
    </div>
  )
}

export default Posts
