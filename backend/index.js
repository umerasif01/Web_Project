const express = require("express")
var mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const port = 3001
app.use(express.json())
app.use(cors())

//console.log("llllllllllllllllllllll")

const RoomBooking = require("./models/room");
const Book = require('./models/Book');
console.log(RoomBooking)
let MONGODB_URI = 'mongodb+srv://Huzaifa_Anjum:merapassword@cluster0.jcgr6fi.mongodb.net/Lab_DB'
mongoose.connect(MONGODB_URI).then(()=>{
    console.log("connected")
}).catch((err)=>{
console.log(err)
})

app.post('/rooms', async (req, res) => {
    // console.log("Hello");
    const { roomNumber, rollNumber, startTime, endTime } = req.body;
    try {
      // Create a new room instance
      const newRoom = new RoomBooking({
        roomNumber,
        rollNumber,
        startTime,
        endTime
      });
      console.log(newRoom)
      // Save the room to the database
      newRoom.save();
  
      res.status(201).json({ message: 'Room added successfully.', room: newRoom });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while adding the room.' });
    }
  });
  
  

app.post('/room/book', async (req, res) => {
    
  try {
      const { roomNumber, rollNumber, startTime, endTime } = req.body;
  
      // Create a new room booking instance
      const roomBooking = new RoomBooking({
        roomNumber,
        rollNumber,
        startTime,
        endTime
      });
      console.log("hello",roomBooking)
      // Save the room booking to the database
      await roomBooking.save();
  
      res.status(201).json({ message: 'Room booking added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while adding the room booking' });
    }
  });



// POST /books/add
app.post('/addBook', async (req, res) => {
  try {
    // Extract the book data from the request body
    const { title, author, isbn, description } = req.body;

    // Create a new book instance
    const book = new Book({
      title,
      author,
      isbn,
      description
    });

    // Save the book to the database
    const newBook = await book.save();

    // Return a response indicating the book was successfully added
    res.status(201).json({ message: 'Book added successfully', book: newBook });
  } catch (error) {
    // Handle any errors that occur during the book creation process
    console.error(error);
    res.status(500).json({ message: 'Failed to add book' });
  }
});

// DELETE /books
app.post('/deleteBook', async (req, res) => {
 
  try {
    // Extract the ISBN from the request body
    const { isbn } = req.body;

    // Find the book by its ISBN and delete it
    const deletedBook = await Book.findOneAndDelete({ isbn });

    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Return a response indicating the book was successfully deleted
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    // Handle any errors that occur during the book deletion process
    console.error(error);
    res.status(500).json({ message: 'Failed to delete book' });
  }
});



// PUT /books
app.put('/updateBook', async (req, res) => {
  try {
    // Extract the ISBN from the request body
    const { isbn } = req.body;

    // Find the book by its ISBN and update it
    const updatedBook = await Book.findOneAndUpdate({ isbn }, req.body, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Return a response with the updated book
    res.json({ message: 'Book updated successfully', book: updatedBook });
  } catch (error) {
    // Handle any errors that occur during the book update process
    console.error(error);
    res.status(500).json({ message: 'Failed to update book' });
  }
});



app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})