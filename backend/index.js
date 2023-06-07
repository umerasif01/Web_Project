const express = require("express")
var mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const port = 3001
app.use(express.json())
app.use(cors())

console.log("llllllllllllllllllllll")

const RoomBooking = require("./models/room");
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
      const newRoom = new Room({
        roomNumber,
        rollNumber,
        startTime,
        endTime
      });
      console.log("XXX",newRoom)
      // Save the room to the database
      await newRoom.save();
  
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



app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})