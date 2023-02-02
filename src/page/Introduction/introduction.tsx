import '../../assets/introduction.css';

import { Box , Typography , Stack, Button} from '@mui/material'

import { image } from '../../data/constant';
import { useScrollYPos } from './../../layout/hooks/getScrollYPos';

const homePageBlackAndWhite:string|undefined = image.find( (value)=>{
    if(value.name.toLowerCase() === 'introPageImgBlackAndWhite'.toLowerCase()){
        return value
    }
    return '';
})?.url

export function Introduction(){
    const scrollY = useScrollYPos();
    if(scrollY > 900 && scrollY < 2130){
        document.querySelector(".color-image")?.classList.add("mask-animation");
    }
    
    return (
        <section id="introduction">
            <div className="introductionPage">
                <Box className="mask-container">
                    <Box className="color-image">
                        <Box className="titleContainer">
                            <Stack direction="column">
                                <Typography variant="h1" className="title">Nicholas Ho</Typography>
                                <a className="titleButton" href="#about">Fullstack Developer</a>
                            </Stack>
                        </Box>
                    </Box>
                    <img src={homePageBlackAndWhite}></img>
                </Box>
            </div>
        </section>
    )
}

export default Introduction