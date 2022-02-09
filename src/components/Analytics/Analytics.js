import React, {useState, useEffect} from "react";
import {
    LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,
    BarChart, Bar, Legend

} from 'recharts';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import "./Analytics.scss";

const Analytics = (props) => {
    const [chartData, setChartData] = useState([]);
    const [age, setAge] = React.useState('');
    const [campaigns, setCampaigns] = useState([]);
    const [currentCampaign, setCurrentCampaign] = useState("");

    const REGIONS_API = "http://127.0.0.1:5000/api/campaign"
    useEffect(()=>{
        fetch(REGIONS_API)
        .then(result=>result.json())
        .then(data=>{
            if (data["status"] === "success") {
                setCampaigns(data["data"]);
            }
        })
        .catch(error=>{
        });
    }, []);
    const handleChange = (event) => {
        const value = event.target.value;
        const ANALYTICS_API = "http://127.0.0.1:5000/api/campaign?ad=";
        fetch(ANALYTICS_API + value)
        .then(response=>response.json())
        .then(result=>{
            setChartData(result["data"])
        })
        .catch(error=>{
            console.log(error)
        });
        setCurrentCampaign(value);
    };
    return (
        <div className={"analyticsContainer"}>
            <div className={"analyticsForm"}>
                <FormControl fullWidth>
                    <InputLabel id="campaign-select-label">Select Ad Campaign</InputLabel>
                    <Select
                    labelId="campaign-select-label"
                    id="campaign-select"
                    value={currentCampaign}
                    label="Select Ad Campaign"
                    onChange={handleChange}
                    >
                        {campaigns.map(campaign =>
                            <MenuItem key={campaign} value={campaign}>{campaign}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </div>
            {chartData.length > 0 &&
            <Grid container>
                <Grid item>
                    <LineChart width={400} height={400} data={chartData}>
                        <Line type="monotone" dataKey="Count" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                        <XAxis dataKey="Name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </Grid>
                <Grid item>
                    <BarChart width={730} height={250} data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Count" fill="#8884d8" />
                    </BarChart>
                </Grid>
            </Grid>
            }
        </div>
    );
}

export default Analytics;