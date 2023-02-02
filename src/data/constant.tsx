import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DownloadIcon from '@mui/icons-material/Download';
import WorldIcon from '@mui/icons-material/Public';
import EmailIcon from '@mui/icons-material/Email';

export const titles = [
    { name: 'Home', icon: <HomeIcon />,url:"/" },
    { name: 'Introduction',icon: <HomeIcon />,url:"/"},
    { name: 'About', icon: <HomeIcon />,url:"/about" },
    { name: 'Resume', icon: <HomeIcon />,url:"/resume" },
    // { name: 'CallToAction', icon: <HomeIcon />,url:"/" },
    // { name: 'PortFolio', icon: <HomeIcon />,url:"/" },
    { name: 'Contact', icon: <HomeIcon />,url:"/contact" },   
]

export const image  = [
    { name: "homePageImg" , url:process.env.PUBLIC_URL+"/nicholas-ho-background.jpg"},
    { name: "introPageImgMask" , url:process.env.PUBLIC_URL+"/image_maskflatten.webp"},
    { name: "introPageImg" , url:process.env.PUBLIC_URL+"/header-background-2.png"},
    { name: "introPageImgBlackAndWhite" , url:process.env.PUBLIC_URL+"/header-background-2-black.png"},
]

export const icons = [
    {name:"profile",icon:<AccountCircleIcon />},
    {name:"world", icon:<WorldIcon />},
    {name:"mail",icon:<EmailIcon />},
]

export const socialMediaImage  = [
    { name: "Facebook" , icon:<FacebookIcon/> ,url:"https://www.facebook.com/nicholas.ho.104/"},
    { name: "Twitter" , icon:<TwitterIcon/>, url:""},
    { name: "LinkedIn" , icon:<LinkedInIcon/>, url:"https://www.linkedin.com/in/nicholas-ho-wai-ken-a03317156/"},
    { name: "Instagram" , icon:<InstagramIcon/>, url:"https://www.instagram.com/gaialance/"},
]

export const button = [
    {name:"DownButton" , icon:<ArrowCircleDownIcon/>},
    {name:"DownloadButton", icon:< DownloadIcon/>}
]