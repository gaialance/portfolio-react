import {
    Box,
    Stack,
    Typography,
 } from '@mui/material'

import '../../assets/footer.css'
import { socialMediaImage } from '../../data/constant'

export function Footer(){
    return (
    <footer>
        <Stack className="row footer" direction="column" spacing={4}>
            <Stack direction="row" spacing={4} className="footerContent">
                {socialMediaImage.map((value ,index)=>{
                    return (
                        <>
                            {value.icon}
                        </>
                        )
                })}
            </Stack>
            <Stack className="footerContent " direction="row" spacing={4} >
                <Typography>
                    &copy; Copyright 2022 Nicholas
                </Typography>
                <Typography>Design by Nicholas Ho Wai Ken</Typography>
            </Stack>
        </Stack>
    </footer>
    )
}