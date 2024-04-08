import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> Your Knowledge</span>
        </h1>
        <p className="desc text-center">
            Notopia is an unique note-sharing platform for knowledge sharing, collaboration and learning. Elevate your note-taking experience with us!
        </p>
        <Feed />
    </section>
  )
}

export default Home
