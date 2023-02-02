import { 
    Box,
    Stack,
    Typography,
    Button,
 } from '@mui/material';

import Swal from 'sweetalert2'

import { image , socialMediaImage , button } from "../../data/constant";

import '../../assets/homePage.css'

const homePageImage:string|undefined = image.find( (value)=>{
    if(value.name.toLowerCase() === 'homePageImg'.toLowerCase()){
        return value
    }
    return '';
})?.url

const backGroundStyle = {
    height:950,
    background: `#161415 url(${homePageImage}) no-repeat top center`
}

export function Home(){
    const handleSocialClick = (url:string) =>{
        if(url){
            window.open(url, "_blank");
        }else{
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'This Link Haven been setup yet',
            confirmButtonText:"Close"
            })
        }
        
    }

    return (
        <section id="home">
             {homePageImage && 
                <Box className="homePage" style={backGroundStyle}>
                    <Box className="homePageContainer">
                        <Typography variant="h1">I'm Nicholas Ho</Typography>
                        <br/>
                        <Typography className="textWhite" variant="h2" >Front-End-Developer , Back-End-Developer , Web Designer</Typography>
                        <br/>
                        <Typography variant="h3">I'm a <span className="textWhite">Malaysia</span> based <span className="textWhite">developer</span> who helps creating awesome and
                        effective visual identities for companies of all sizes around the globe.<br /> As well as providing SEO guidance on local brands.
                        <br />Let's <a className="smoothscroll" href="#about">Get Started</a> by scrolling
                        and learn more <a className="smoothscroll" href="#about">about me</a>.</Typography>
                        <Stack className="social" direction="row" spacing={5}>
                            {socialMediaImage.map((value ,index)=>{
                                return (
                                    <Button onClick={()=>{
                                        handleSocialClick(value?.url)
                                    }}>
                                        {value.icon}
                                    </Button>
                                    )
                            })}
                        </Stack>
                        <div className='button'>
                            <a href="#introduction">
                                {button[0].icon}
                            </a>
                        </div>
                    </Box>
                </Box>
            }
        </section>
    )}