import BookList from "@/components/sections/BookList"
import { sampleBooks } from "@/constants"

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
    <BookList books={sampleBooks}/>
      <BookList books={sampleBooks}/>
    </div>
  )
}

export default Home
