import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';


import "./SearchResult.scss";

const SearchResult = (props) => {
    const DATE_OF_PURCHASE = "Date of Purchase";
    const nonEditable = [DATE_OF_PURCHASE, "Policy_id", "Customer_id"];
    const [isEditActive, setIsEditActive] = useState(false);
    const [status, setStatus] = useState("");
    const {data, onValueChange} = props;
    const keys = Object.keys(data);
    const UPDATE_API = "http://127.0.0.1:5000/api/update";
    const onSave = () => {
        fetch(UPDATE_API, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(response=>response.json())
        .then(result=>{
            setStatus(result["status"])
        })
        .catch(error=>{
            setStatus(error.toString())
        });
    }

    const onInputChange = (key, value) => {
        // Validation 2 - premium should be less than 10000000
        if (key === "Premium" && parseInt(value) > 1000000 ) {
            return;
        }
        onValueChange(key, value);
    }

    return (
        <div>
            {keys.length > 0 &&
                <React.Fragment>
                    <Button onClick={()=>setIsEditActive(prevState=>!prevState)} variant="contained">
                        {isEditActive ? "Hide edit" : "Show edit" }
                    </Button>

                    <div className={"listContainer"}>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            <Grid container>
                                {keys.map(key=>
                                <Grid item md={6}>
                                <ListItem>
                                    <Grid container>
                                        <Grid item md={6}>
                                            {key}
                                        </Grid>
                                        <Grid item md={6}>
                                            {isEditActive && !nonEditable.includes(key)?
                                                <TextField
                                                    margin={"none"}
                                                    variant="standard"
                                                    value={data[key]}
                                                    onChange={(e)=>onInputChange(key, e.target.value)}
                                                />
                                                : data[key]
                                            }
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                </Grid>
                                )}
                            </Grid>
                        </List>
                    </div>
                </React.Fragment>
            }
            {isEditActive && <Button onClick={onSave} variant="contained">Save</Button>}
            <div>{status}</div>
        </div>
    );
}

export default SearchResult;