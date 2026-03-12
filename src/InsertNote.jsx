import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

function InsertNote({ onAddNote }) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleClick() {
    if (!note.title.trim() || !note.content.trim()) return;
    const newNote = {
      key: Date.now(),
      title: note.title,
      content: note.content,
    };
    onAddNote(newNote);
    setNote({ title: '', content: '' });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value,
    }));
  }

  return (
    <div className="create-note">
      <TextField
        name="title"
        label="Title"
        variant="standard"
        fullWidth
        onChange={handleChange}
        value={note.title}
        sx={{ mb: 1 }}
      />
      <TextField
        name="content"
        label="Take a note..."
        variant="standard"
        fullWidth
        multiline
        rows={3}
        onChange={handleChange}
        value={note.content}
        sx={{ mb: 2 }}
      />
      <IconButton
        onClick={handleClick}
        sx={{
          backgroundColor: '#f5ba13',
          color: '#fff',
          '&:hover': { backgroundColor: '#e0a800' },
        }}
      >
        <AddIcon />
      </IconButton>
    </div>
  );
}
export default InsertNote;
