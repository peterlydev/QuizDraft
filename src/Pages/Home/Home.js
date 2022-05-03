import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import { TextField, MenuItem, Button } from '@mui/material';
import Categories, {} from '../../Data/Categories';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const Home = ({ name, setName, fetchQuestions }) => {

    const[category, setCategory] = useState("")
    const[difficulty, setDifficulty] = useState("")
    const[error, setError] = useState(false);

    const navigate= useNavigate();

    const handleSubmit = () => {
        if (!category||!difficulty|!name) {
            setError(true)
            return;
        } else {
            setError(false)
            fetchQuestions(category, difficulty);
            navigate('/quiz')
        }
    }
    

  return (
    <div className='content'>
    <div className="settings">
        <span>Quiz Settings</span>

        <div className="settings-select">
        {error && <ErrorMessage>Please fill in all of the fields</ErrorMessage>}
            <TextField label='Enter Your Name' variant='outlined'
            style={{ marginBottom: 35 }}
            onChange={(e) => setName(e.target.value)}
            />

            <TextField select label="Select Category"
                variant="outlined"
                style={{ marginBottom: 35 }}
                onChange={(e) => setCategory(e.target.value)}
                value={category}>


               {Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
                </MenuItem>
               ))}
             </TextField>

             <TextField
             select
             label="Select Difficulty"
             variant="outlined"
             style={{ marginBottom: 35 }}
             onChange={(e) => setDifficulty(e.target.value)}
             value={difficulty}>

             <MenuItem key="Easy" value="easy">
             Easy
             </MenuItem>
             <MenuItem key="Medium" value="medium">
             Medium
             </MenuItem>
             <MenuItem key="Hard" value="hard">
             Hard
             </MenuItem>
             </TextField>  

             <Button variant="contained" color="primary" size="large" style={{ fontFamily: 'aldrich'}} onClick={handleSubmit}>Begin Quiz</Button>
        </div>
    </div>
    <img src="/quiz.svg" className="banner" alt="quiz img" />
    
    </div>
  )
}

export default Home
