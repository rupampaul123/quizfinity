
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants({cat, diff, handleCategoryChange, handleDifficultyChange}) {
  return(
    <>
    <div style={{margin:"20px", display:"flex", justifySelf:"center"}}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 820, borderBottom: "1px solid white" }}>
                <InputLabel id="Categories" sx={{color:"white"}}>Categories</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="Categories"
                value={cat}
                onChange={handleCategoryChange}
                label="Categories"
                sx={{'& .MuiSelect-icon': {
                    color: 'white'}, color:"white" }}
                >
                <MenuItem value={21}>Sports</MenuItem>
                <MenuItem value={23}>History</MenuItem>
                <MenuItem value={11}>Movies</MenuItem>
                <MenuItem value={24}>Politics</MenuItem>
                <MenuItem value={9}>General Knowledge</MenuItem>
                <MenuItem value={26}>Pop Culture</MenuItem>
                </Select>
        </FormControl>
    </div>



        <div style={{margin:"40px 20px 20px 20px", display:"flex", justifySelf:"center"}}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 820, borderBottom: "1px solid white" }}>
                <InputLabel id="difficulty" sx={{color:"white"}}>Difficulty</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="difficulty"
                value={diff}
                onChange={handleDifficultyChange}
                label="difficulty"
                sx={{'& .MuiSelect-icon': {
                    color: 'white',}, color:"white"}}
                >
                <MenuItem value={"easy"}>Easy</MenuItem>
                <MenuItem value={"medium"}>Medium</MenuItem>
                <MenuItem value={"hard"}>Hard</MenuItem>
                </Select>
            </FormControl>
        </div>

    </>
  )
}
