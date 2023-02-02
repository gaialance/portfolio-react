import { Stack } from '@mui/material'

import { About } from "./Abouts"
import { Home } from "./Home"
import { CallToAction } from "./CallToAction"
import { Contact } from './Contact'
import {Introduction} from './Introduction'

export function LandingPage(){
    return (
        <Stack direction="column" className="container">
            <Home />
            <Introduction />
            <About />
            <CallToAction />
            <Contact />
        </Stack>
    )
}