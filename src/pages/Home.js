import React from "react";
import "./Home.scss";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import DateRangeTwoToneIcon from '@mui/icons-material/DateRangeTwoTone';
import GroupTwoToneIcon from '@mui/icons-material/GroupTwoTone';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
import FeaturedVideoTwoToneIcon from '@mui/icons-material/FeaturedVideoTwoTone';
import MiscellaneousServicesTwoToneIcon from '@mui/icons-material/MiscellaneousServicesTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import { useNavigate } from "react-router-dom";
import PostAddTwoToneIcon from '@mui/icons-material/PostAddTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';

const CardComponent = (props) => {
    let navigate = useNavigate();
    const Icon = props.icon;
    return (    
        <Card sx={{ maxWidth: 345 }} onClick={()=>navigate(props.link)}>
            <CardActionArea>
                <div class="homeIconContainer">
                    <Icon />
                </div>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

const Home = (props) => {        
    const data = [
        {title: "User", description: "Add, modify, delete users and roles", icon: GroupTwoToneIcon , link: "/user"},
        {title: "Admin", description: "Add, modify, delete tenants and roles", icon: AdminPanelSettingsTwoToneIcon , link: "/admin"},
        {title: "Products", description: "Add, modify, delete products", icon: CategoryTwoToneIcon , link: "/products"},
        {title: "Template Builder", description: "Add, modify, delete ad templates", icon: FeaturedVideoTwoToneIcon , link: "/template"},
        {title: "Scheduler", description: "Schedule an advertisement in advance", icon: DateRangeTwoToneIcon, link: "/scheduler"},
        {title: "Service Clients", description: "Email, SMS, POST Clients and API integrations", icon: MiscellaneousServicesTwoToneIcon, link: "/clients" },
        {title: "Dashboard", description: "Access current campaigns, ad statistics, etc", icon: DashboardTwoToneIcon , link: "/dashboard"},
        {title: "Post advertisement", description: "Create and post ads to multiple platforms", icon: PostAddTwoToneIcon , link: "/adv"}
    ];
    return (
        <div className={"homeContainer"}>
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

export default Home;