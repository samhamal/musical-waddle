import { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button'
import Iconbutton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip'
import { DataGrid } from '@mui/x-data-grid';

function Mui() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, {...todo, id: new Date()}]);
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  }

  const columns = [
    { field: 'description', headerName: 'Description', width: 150},
    { field: 'date', headerName: 'Date', width: 150},
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Todolist
          </Typography>
        </Toolbar>
      </AppBar>
    <Stack 
        direction="row" 
        spacing={2} 
        mt={2} 
        justifyContent="center"
        alignItems="center">
      <TextField 
        variant="standard"
        label="Description" 
        name="description" 
        value={todo.description} 
        onChange={inputChanged} 
      />
     <TextField 
       variant="standard"
       label="Date" 
       name="date" 
       value={todo.date} 
       onChange={inputChanged}
      />
      <Button variant="outlined" onClick={addTodo} startIcon={<SaveIcon />}> Add</Button>
    </Stack>
    <DataGrid columns={columns} rows={todos} />
    </>
  );
}

export default Mui;