const mongoose = require("mongoose");
const ToDoModel = require("../models/ToDoModels");

// Fetch all To-Do items
module.exports.getToDo = async (req, res) => {
  try {
    console.log("Fetching To-Do items...");
    const toDo = await ToDoModel.find(); // Fetch all To-Do items
    res.status(200).send(toDo);
  } catch (error) {
    console.error("Error fetching To-Do items:", error);
    res.status(500).send({ error: "Failed to fetch To-Do items" });
  }
};

// Save a new To-Do item
module.exports.createToDo = async (req, res) => {
  try {
    console.log("Create To-Do request body:", req.body);
    const { text } = req.body;
    if (!text) {
      console.error("Text is required");
      return res.status(400).send({ error: "Text is required" });
    }

    const newToDo = await ToDoModel.create({ text });
    console.log("To-Do created:", newToDo);
    res.status(201).send(newToDo);
  } catch (error) {
    console.error("Error saving To-Do:", error);
    res.status(500).send({ error: "Failed to save To-Do" });
  }
};

// Update an existing To-Do item
module.exports.updateToDo = async (req, res) => {
  try {
    const { _id, text } = req.body;
    if (!_id || !text) {
      return res.status(400).send({ error: "ID and text are required" });
    }

    // if (!mongoose.Types.ObjectId.isValid(_id)) {
    //   return res.status(400).send({ error: "Invalid ID format" });
    // }

    const updatedToDo = await ToDoModel.findByIdAndUpdate(_id, { text });
    if (!updatedToDo) {
      return res.status(404).send({ error: "To-Do not found" });
    }

    console.log("Updated successfully:", updatedToDo);
    res.status(200).send(updatedToDo);
  } catch (error) {
    console.error("Error updating To-Do:", error);
    res.status(500).send({ error: "Failed to update To-Do" });
  }
};

// Delete a To-Do item
module.exports.deleteToDo = async (req, res) => {
  try {
    console.log("Delete request body:", req.body);
    const { _id } = req.body;
    if (!_id) {
      return res.status(400).send({ error: "ID is required" });
    }

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).send({ error: "Invalid ID format" });
    }

    const deletedToDo = await ToDoModel.findByIdAndDelete(_id);
    if (!deletedToDo) {
      return res.status(404).send({ error: "To-Do not found" });
    }

    console.log("Deleted successfully:", deletedToDo);
    res.status(200).send({ message: "Deleted successfully" });
  } catch (error) {
    console.error("Error deleting To-Do:", error);
    res.status(500).send({ error: "Failed to delete To-Do" });
  }
};



// const ToDoModel = require("../models/ToDoModels");

// module.exports.getToDo = async (req, res) => {
//     const todo = await ToDoModel.find();
//     res.send(todo);
// }

// module.exports.saveToDo = (req, res) => {
//     const { text } = req.body;

//     ToDoModel
//         .create({ text })
//         .then((data) =>{ 
//             console.log("Added Successfully...")
//             console.log(data)
//             res.send(data)
//         })
//         .catch((err) => console.log(err));
// }

// module.exports.deleteToDo = (req, res) => {
//     const { _id } = req.body;

//     console.log('id ---> ', _id);

//     ToDoModel
//         .findByIdAndDelete(_id)
//         .then(() => res.set(201).send("Deleted Successfully..."))
//         .catch((err) => console.log(err));
// }

// module.exports.updateToDo = (req, res) => {
//     const { _id, text } = req.body;

//     ToDoModel
//         .findByIdAndUpdate(_id, { text })
//         .then(() => res.set(201).send("Updated Successfully..."))
//         .catch((err) => console.log(err));
// }