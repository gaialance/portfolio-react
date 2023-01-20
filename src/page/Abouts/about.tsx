import { Box, Stack, Typography,Button } from "@mui/material"

import { icons,button } from "../../data/constant"

import '../../assets/aboutPage.css'

export function About(){
    const profileIcon = icons.find( (value) => {
        if(value.name.toLocaleLowerCase() === 'profile'.toLocaleLowerCase()){
            return value
        }
        return '';
    })?.icon

    const handleDownload = () =>{
        const link = 'https://docs.google.com/document/d/1OtcnWMVQW4Z1uPDcRbb4PKiDpJ3ONizn/export?format=pdf';
        window.open(link);
    }

    return (
        <section id="about">
            <Box className="sectionAbout">
                <Stack className="row" direction="row" spacing={2 }>
                    <Box className="profileIcon">
                        {profileIcon}
                    </Box>
                    <Stack direction="column" spacing={2}>
                        <Typography variant="h2">About me</Typography>
                        <Typography >
                        I'm a <u><b>Fullstack Developer</b></u> based in <u><b>Malaysia</b></u>. I'm glad that you come accross my page and thank you for your time reading this.
                        I am passionate to let you know that I'm very open minded and are able to accept many great opinion that comes to me. Feel Free to give me your criticism or give me your feedback about
                        what ever you have question or doubts for me. I have been in this industry since <u><b>2018</b></u> and its been a long journey for me working in this industry.
                        I have been in love in this field since younger age in my high school years. The first project i did was an e-learning website for stocks that helps you in getting your familarity with stocks market.
                        </Typography>
                        <Stack className="contactDetail" 
                        direction={{md:"row",sm:"column"}} 
                        spacing={20}>
                            <Box>
                                <Typography variant="h2">Contact Details</Typography>
                                <Typography >nicholashowaiken@gmail.com</Typography>
                            </Box>
                            <Button className="downloadButton" variant="outlined" size="medium" onClick={handleDownload}>{button[1].icon} Download Resume</Button>
                        </Stack>
                    </Stack> 
                </Stack> 
            </Box>
        </section>
    )
}