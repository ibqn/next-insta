import Stories from 'components/stories'

const Feed = () => {
  return (
    <main className="min-h-screen bg-[#fafafa] py-4">
      <div className="mx-auto max-w-[470px]">
        <section>
          <Stories />
        </section>
        <section>Posts</section>
      </div>
    </main>
  )
}

export default Feed
