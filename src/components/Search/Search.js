import React, {useState} from "react";
import "./Search.scss";
import SearchResult from "../SearchResult";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [data, setData] = useState({});
    const SEARCH_API = "http://127.0.0.1:5000/api/search?id=";

    const onSearchInput = (e) => {
        setSearchValue(e.target.value)
    }
    const onSubmit = () => {
        setErrorMsg("");
        fetch(SEARCH_API  + searchValue.toString())
        .then(result=>result.json())
        .then(data=>{
            if (data["status"] === "success") {
                setData(data["data"]);
            } else {
                setErrorMsg("No results found.");
            }

        })
        .catch(error=>{
            setErrorMsg(error.toString());
        });
    }
    const onValueChange = (key, value) => {
        setData({...data, [key]:value});
    }

    return (
        <div className="searchContainer">
            <div className={"searchBar"}>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Enter Campaign ID"
                        inputProps={{ 'aria-label': 'campaign search' }}
                        value={searchValue}
                        onChange={onSearchInput}
                        type="search"
                    />
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={onSubmit}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
            {errorMsg === "" ?
                <SearchResult
                    data={data}
                    onValueChange={onValueChange}
                />
                : <div>{errorMsg}</div> }
        </div>
    );
}

export default Search;