import React, { useState } from "react";
import { FormControl, FormLabel, Button, Input } from "@chakra-ui/react";
import { addNote } from "../../actions/todo";


export default function Form({ arr, setarr, setModal }) {
  const [note, setNote] = useState({ title: "", des: "",check:false });

  const handleSubmit = async(event) => {
    event.preventDefault();

    const newNoteData = await addNote(note);
    setarr([...arr, note]);
    setNote({ title: "", des: "" });
    setModal(false);
  };

  const handleChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired my="10px">
        <FormLabel>Title:</FormLabel>
        <Input
          name="title"
          type="text"
          placeholder="Enter Title..."
          onChange={handleChange}
          value={note.title}
        />
      </FormControl>
      <FormControl isRequired my="10px">
        <FormLabel>Description:</FormLabel>
        <Input
          name="des"
          type="text"
          placeholder="Enter Description"
          onChange={handleChange}
          value={note.des}
        />
      </FormControl>

      <Button type="submit" my="20px" onSubmit={handleSubmit}>
        Submit
      </Button>
    </form>
  );
}
