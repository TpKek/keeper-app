import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Notes({ notes, onDeleteNote }) {
  return (
    <div>
      {notes.map(note => (
        <Card
          key={note.key}
          className="notes"
          sx={{
            backgroundColor: '#fff9c4',
            boxShadow: 3,
            position: 'relative',
            transform: 'rotate(-1deg)',
            '&:hover': {
              transform: 'rotate(0deg) scale(1.02)',
              boxShadow: 6,
            },
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: 'Caveat, cursive',
                fontWeight: 600,
                fontSize: '1.3rem',
              }}
            >
              {note.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontFamily: 'Caveat, cursive', fontSize: '1.1rem', mt: 1 }}
            >
              {note.content}
            </Typography>
            <IconButton
              aria-label="delete"
              onClick={() => onDeleteNote(note.key)}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                color: 'gray',
                '&:hover': { color: '#e74c3c' },
              }}
            >
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
export default Notes;
