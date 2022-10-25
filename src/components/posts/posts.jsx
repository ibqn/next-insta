import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { postsState } from 'recoil-atoms'
import Image from 'next/future/image'
import { getUserData } from 'util/user-data'
import MoreOptionsIcon from './more-options.svg'
import EmojiIcon from './emoji.svg'
import Like from './like.svg'
import Comment from './comment.svg'
import SharePost from './share-post.svg'
import Save from './save.svg'
import PostTitle from 'components/post-title'

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

const postButtons = [
  { icon: Like },
  { icon: Comment },
  { icon: SharePost },
  { icon: Save },
]

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
        const { userId, username, avatar, postImage, postTitle } = post

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
              <div className="flex flex-col">
                <p className="text-sm font-bold">{username}</p>
                <p className="text-xs">Original Audio</p>
              </div>
              <MoreOptionsIcon className="ml-auto" />
            </div>
            <Image priority src={postImage} alt="Post" />
            <div className="py flex flex-row py-3 px-1">
              {postButtons.map((button, index) => {
                const { icon: Icon } = button
                return (
                  <button className="group px-2 last:ml-auto" key={index}>
                    <Icon className="group-hover:fill-[#8e8e8e] group-hover:text-[#8e8e8e]" />
                  </button>
                )
              })}
            </div>
            <div className="whitespace-nowrap px-3 text-sm font-medium">
              <span>46,151</span> likes
            </div>
            <div className="p-3 text-sm">
              <PostTitle username={username} postTitle={postTitle} />
            </div>
            <div className="p-3 pt-0 text-[10px] uppercase text-[#8e8e8e]">
              2 days ago
            </div>
            <div className="flex items-center border-t p-3">
              <EmojiIcon className="mr-3" />
              {/* <input type="text" placeholder="Add a comment..." /> */}
              <textarea
                aria-label="Add a comment…"
                placeholder="Add a comment…"
                className="h-[18px] grow resize-none appearance-none justify-center border-none text-sm leading-[18px] outline-none"
                autocomplete="off"
                autocorrect="off"
              ></textarea>
              <button className="ml-auto text-sm font-semibold capitalize text-[#0095F6] opacity-30">
                post
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Posts
