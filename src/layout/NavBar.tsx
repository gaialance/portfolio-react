import { useState } from 'react';

import { 
  IconButton,
  Menu,
  Typography,
  MenuItem,
  Stack,
  Box,
 } from '@mui/material';

 import MenuIcon from '@mui/icons-material/Menu';

import '../assets/navBar.css'
import { titles } from '../data/constant';
import { useScrollYPos } from './hooks/getScrollYPos';

export function NavBar(){

  const scrollY = useScrollYPos();
  
  let hideNav:string = "hideNav";

  if(scrollY < 700 ){
    hideNav = "hideNav";
  }else{
    hideNav = "animeNav";
  }
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  };

  const currentUrl = window.location.pathname;

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Box className="nav">
        <Stack className={`${hideNav}`} direction="row">
            <IconButton className="sitetitlebutton">
              <a className="site-title" href="#home">
                Nicholas Ho
                </a>
            </IconButton>
            <Stack className="navButton" direction="row" spacing={2}>
              {titles.map( ( e , index ) => {
                return (
                  <a key={index} id={`subMenu${index}`} className={e.name.toLowerCase()=='home'?'active':''} href={`/#${e.name.toLowerCase()}`}>{e.name}</a>
                )
              })}
            </Stack>
        </Stack>
      </Box>
      <Box className="sideBar">
        <Stack className={`${hideNav}`} direction="row">
          <Typography className="site-title" variant="h5">Nicholas Ho</Typography>
          <IconButton 
            aria-label="more"
            id="long-button"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon sx={{color:"white"}}/>
          </IconButton>
          <Menu 
            id="long-menu"
            MenuListProps={{
              'aria-labelledby':'long-button'
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{style:{
              maxHeight: 100*4.5,
              width: '100%',
              backgroundColor:"black"
            }}}
          >
            {titles.map( ( e , index) => {
              return (
                <MenuItem 
                key={e.name} 
                selected={e.name === currentUrl} 
                onClick={handleClose} 
                sx={{
                  justifyContent:"center"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor='white'
                  e.currentTarget.querySelector('a')!.style.color = 'black'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor='black'
                  e.currentTarget.querySelector('a')!.style.color = 'white'
              }}
                >
                  <a className="navHover" key={index} id={`subMenu${index}`} style={{color:"white"}} href={`#${e.name.toLocaleLowerCase()}`}>{e.name}</a>
                </MenuItem >
              )
            })}
          </Menu>
        </Stack>
      </Box>
    </>
    

  )}