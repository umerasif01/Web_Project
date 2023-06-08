import RoomForm from "./addRoom";
import Navbar from "./Navbar";
import BookForm from "./manageBooks";
import UpdateBook from "./updateBook"
import DeleteBook from "./deleteBook"
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/book"  element={<BookForm/>}/>
        <Route path="/room" element={<RoomForm/>}/>
        <Route path="/updateBook" element={<UpdateBook/>}/>
        <Route path="/deleteBook" element={<DeleteBook/>}/>
      </Routes>
      {/* <BookForm/> */}
      {/* <RoomForm/> */}
    </div>
  );
}

export default App;
