import { Typography , Stack, Box} from '@mui/material'

import { icons } from "../../data/constant"

import '../../assets/callToAction.css'

export function CallToAction() {

    const profileIcon = icons.find( (value) => {
        if(value.name === 'world'){
            return value
        }
        return '';
    })?.icon

    return (
    <section id ="calltoaction">
        <Box className="sectionCallToAction">
            <Stack direction="row" className='row' spacing={2}>
                <Box className="worldIcon">
                    {profileIcon}
                </Box>
                <Stack direction= "column">
                    <Typography variant='h2'>Get to Know me more.</Typography>
                    <Typography>You may scroll down further to find a form for you to fill in to contact me. I will reply you as soon as I check out your message.</Typography>
                </Stack>
            </Stack>
        </Box>
    </section>
    )
}