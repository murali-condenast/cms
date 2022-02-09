import React from "react";
import "./ServiceClient.scss";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import {SocialMediaIconsReact} from 'social-media-icons-react';

const CardComponent = (props) => {
    let navigate = useNavigate();    
    return (    
        <Card sx={{ maxWidth: 345 }} onClick={()=>navigate(props.link)}>
            <CardActionArea>
                <div className="serviceClientIconContainer">
                    {props.icon}
                </div>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

const SocialIcon = (props) => (
    <SocialMediaIconsReact 
        borderColor="rgba(0,0,0,0.25)" 
        icon={props.name}
         
        size="48" 
    />
);

const ServiceClient = (props) => {        
    const data = [
        {title: "Email", icon: <SocialIcon name="mail"/> , link: ""},
        {title: "SMS", icon: <SocialIcon name="send"/> , link: ""},
        {title: "Twitter", icon: <SocialIcon name="twitter"/> , link: ""},
        {title: "LinkedIn", icon: <SocialIcon name="linkedin"/> , link: ""},
        {title: "Instagram", icon: <SocialIcon name="instagram"/> , link: ""},
        {title: "Facebook", icon: <SocialIcon name="facebook"/> , link: ""},        
    ];
    return (
        <div className={"serviceClientContainer"}>
            <h2>Client Service Integration</h2>
            <h5>Login to use the service</h5>
            <Grid container spacing={2}>
                {data && data.map((item, index) => 
                    <Grid item key={index}>
                        <CardComponent title={item.title}description={item.description} icon={item.icon} link={item.link}/>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}

export default ServiceClient;