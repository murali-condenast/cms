import React from "react";
import "./Home.scss";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import ScreenSearchDesktopTwoToneIcon from '@mui/icons-material/ScreenSearchDesktopTwoTone';
import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import DateRangeIcon from '@mui/icons-material/DateRange';

import { useNavigate } from "react-router-dom";

const Home = (props) => {
    let navigate = useNavigate();
    return (
        <div className={"homeContainer"}>
            <Grid container spacing={2}>
                <Grid item>
                    <Card sx={{ maxWidth: 345 }} onClick={()=>navigate("/scheduler")}>
                        <CardActionArea>
                            <div class="homeIconContainer">
                                <DateRangeIcon/>
                            </div>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Scheduler
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Scheule an advertisement in advance
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{ maxWidth: 345 }} onClick={()=>navigate("/analytics")}>
                        <CardActionArea>
                            <div class="homeIconContainer">
                                <AnalyticsTwoToneIcon/>
                            </div>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Analytics
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Visualize policies bought regionwise per month.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;