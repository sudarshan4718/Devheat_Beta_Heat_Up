import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const port = 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Function to connect to the MongoDB database
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/AvRegister', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToDatabase();

// Define a schema for questions
const questionSchema = new mongoose.Schema({
  questionText: String,
  answers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answer", // Reference to the User model
  },
  User: Object,
});

// Create a model for questions
const Question = mongoose.model("Question", questionSchema);


//AnswerSchema
const AnswerSchema = new mongoose.Schema({
  answer: String,
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  User: Object,
});

const Answer = mongoose.model("Answer",AnswerSchema);




// Define the user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question", // Reference to the Question model
  }],
});


// Create a model for users
const User = mongoose.model("User", userSchema);

app.post("/login", async (req, res) => {
  // ... your existing login route
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (user) {
      if (password === user.password) {
        res.json({ message: "Login Successful", user: user });
      } else {
        res.json({ message: "Password incorrect" });
      }
    } else {
      res.json({ message: "User not registered" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      res.json({ message: "User already registered" });
    } else {
      const newUser = new User({ name, email, password });
      await newUser.save();
      res.json({ message: "Successfully Registered, please login now" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("/PostQuestion", async (req, res) => {
  try {
    const { text } = req.body;

    
    const newQuestion = new Question({
      questionText : text,
    });

    // Save the question to the database
    await newQuestion.save();

    // Update the user's questions array with the new question
    //  await User.findByIdAndUpdate(User, { $push: { questions: newQuestion._id } });

     res.status(201).json({ message: 'Question posted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
