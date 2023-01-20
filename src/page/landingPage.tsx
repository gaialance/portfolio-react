import { Stack } from '@mui/material'

import { About } from "./Abouts"
import { Home } from "./Home"
import { CallToAction } from "./CallToAction"
import { Contact } from './Contact'

export function LandingPage(){
    return (
        <Stack direction="column" className="container">
            <Home />
            <About />
            <CallToAction />
            <Contact />
        </Stack>
    )
}