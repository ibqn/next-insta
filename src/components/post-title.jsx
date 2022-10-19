import { useEffect, useRef, useState } from 'react'

const PostTitle = ({ username, postTitle }) => {
  const postTitleEl = useRef(null)
  const [isPostTitleClamped, setIsPostTitleClapmed] = useState(false)

  useEffect(() => {
    const postTitle = postTitleEl.current
    const isTextClamped = postTitle.scrollHeight > postTitle.clientHeight

    setIsPostTitleClapmed(isTextClamped)
  }, [postTitle, username])

  return (
    <>
      <div ref={postTitleEl} className="line-clamp-2">
        <span className="font-bold">{username}</span>{' '}
        <span className="">{postTitle}</span>
      </div>
      {isPostTitleClamped === true && (
        <button className="text-[#8e8e8e]">more</button>
      )}
    </>
  )
}

export default PostTitle
