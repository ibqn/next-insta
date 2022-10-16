import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { postsState } from 'recoil-atoms'
import Image from 'next/future/image'
import { getUserData } from 'util/user-data'

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
    <div>
      {posts.map((post) => {
        const { userId, username, postImage } = post

        return (
          <div key={userId}>
            <div>{username}</div>
            <Image priority src={postImage} alt="Post" />
          </div>
        )
      })}
    </div>
  )
}

export default Posts
