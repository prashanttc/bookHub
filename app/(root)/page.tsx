import BookList from "@/components/sections/BookList"
import PersonaliseBookList from "@/components/sections/PersonaliseBookList"
import { sampleBooks } from "@/constants"

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <PersonaliseBookList books={sampleBooks}/>
      <BookList books={sampleBooks}/>
    </div>
  )
}

export default Home
