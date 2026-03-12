import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Header';
import Footer from './Footer';
import Notes from './Notes';
import InsertNote from './InsertNote';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f5ba13',
    },
    background: {
      default: '#8b7355',
    },
  },
  typography: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  },
});

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter(note => note.key !== id));
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Header />
        <InsertNote onAddNote={addNote} />
        <Notes notes={notes} onDeleteNote={deleteNote} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
