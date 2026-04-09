const express = require("express")
const noteModel = require("./model/node.model")
 const app = express()
app.use(express.json());
app.post("/notes", async (req, res) => {
  try {
    const data = req.body;

    const newNote = await noteModel.create({
      title: data.title,
      description: data.description
    });

    res.status(201).json({
      message: "Note created ✅",
      data: newNote
    });

  } catch (error) {
    console.error("Error ❌", error);
    res.status(500).json({
      message: "Error creating note"
    });
  }
});


app.get("/notes", async (req, res) => {
  try {
    const notes = await noteModel.find();

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching notes"
    });
  }
});



app.delete("/notes/:id", async (req, res) => {
  try {
    const id = req.params.id;

    await noteModel.findByIdAndDelete(id);

    res.status(200).json({
      message: "Note deleted"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting note"
    });
  }
});


app.patch("/notes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    await noteModel.findByIdAndUpdate(id, data);

    res.status(200).json({
      message: "Note updated"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating note"
    });
  }
});




module.exports = app