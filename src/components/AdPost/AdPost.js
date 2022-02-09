import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ImageUpload from "./ImageUpload";
import SocialCheckbox from "./SocialCheckbox";
import Button from '@mui/material/Button';

export default function AdPost() {
    const onSave = (filePath) => {
        console.log(filePath);
    }
    return (
        <Box sx={{
            padding: "5% 30%"
        }}>   
            <h2>Create, post and share advertisement to multiple platforms</h2>
            <Box style={{textAlign: "center"}}>
                <Box style={{padding: "10px 0px"}}>
                    <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth/>
                </Box>
                <Box style={{padding: "10px 0px"}}>
                    <TextField id="filled-basic" label="Description" variant="outlined" fullWidth/>      
                </Box>            
            </Box>            
            <ImageUpload onSave={onSave}/>
            <SocialCheckbox />
            <Box style={{textAlign: "center"}}>
                <Button variant="contained">Create Ad</Button>
            </Box>            
        </Box>
    );
}