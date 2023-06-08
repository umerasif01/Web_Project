import RoomForm from "./addRoom";
import Navbar from "./Navbar";
import BookForm from "./manageBooks";
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/book"  element={<BookForm/>}/>
        <Route path="/room" element={<RoomForm/>}/>
      </Routes>
      {/* <BookForm/> */}
      {/* <RoomForm/> */}
    </div>
  );
}

export default App;
