import React ,{
    useState,
} from 'react';
import CloseIcon from '@mui/icons-material/Close';

import {
    Box, 
    Typography,
    TextField,
    Button,
    Stack,
    Snackbar,
 } from '@mui/material'

 import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { icons } from '../../data/constant';

import Swal from 'sweetalert2'

import '../../assets/contact.css'
import axios from 'axios';

let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export function Contact(){
    const mailIcon = icons.find( (value) => {
        if(value.name === 'mail'){
            return value
        }
        return '';
    })?.icon

    // states
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')


    const [open, setOpen] = React.useState(false);
    
    const handleClose = () =>{
        setOpen(false);
    }

    const handleSubmit = async () =>{
        if( ! email.match(validRegex)){
            setOpen(true);
            return;
        }

        let data = {
            name:name,
            email:email,
            subject:subject,
            message:message,
        }

        const { value: formValues } = await Swal.fire({
            title: 'Send Email',
            width:"45%",
            showCancelButton:true,
            html:
            '<div class="formGroup"><label>To</label><input id="swal-input1" class="swal2-input" value="nicholashowaiken@gmail.com" readonly></div><br>' +
            `<div class="formGroup"><label>From</label><input id="swal-input2" class="swal2-input" value="${email}" readonly></div><br>` +
            `<div class="formGroup"><label>Subject</label><input id="swal-input3" class="swal2-input" value="${subject}" readonly></div><br>` +
            `<div class="formGroup"><label>Message</label><textarea class="swal2-input" id="swal-input4">Hi my Name is ${name}\nand i wish to message you about\n${message}</textarea></div><br>` ,
            focusConfirm: false,
            preConfirm: () => {
              return [
                (document.getElementById("swal-input1") as HTMLInputElement).value,
                (document.getElementById("swal-input2") as HTMLInputElement).value,
                (document.getElementById("swal-input3") as HTMLInputElement).value,
                (document.getElementById("swal-input4") as HTMLInputElement).value,
              ]
            }
          })

          if(formValues === undefined){
            return false;
          }
          
          await axios({
            method:"post",
            url:"https://sheetdb.io/api/v1/gsubcmv0j2lwm",
            data:{
                Timestamp:new Date().toLocaleString(),
                Email:formValues[1],
                Name:name,
                Subject:formValues[2],
                Message:formValues[3],
            },
          }).then((resp) => {
            if(!resp.data){
                return;
            }else{
                window.open(" mailto:nicholashowaiken?subject=Tips to increase remote collaboration("+formValues[2]+")&body= Hi Nicholas /n I'm "+name+"  /n Here to ask about "+formValues[3]+"")
            }
          })
    }
    
    return(
        <section id="contact">
            <Box className="contact">
                <Stack direction="row" className="row" spacing={2}>
                    <Box className="mailIcon">{mailIcon}</Box>
                    <Stack direction="column" spacing={2}>
                        <Typography>
                            The email features is power by google limited to ( 500 per day)if i did not reply to your email you may email to me directly <br/> without using below features or just click on the whatsapp button
                        </Typography>
                        <Stack className="infoColumn" direction="column" spacing={2}>
                            <Stack direction="row"spacing={3}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Name"
                                    name='name'
                                    fullWidth
                                    autoComplete='false'
                                    value={name}
                                    onChange={e=> setName(e.target.value)}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Email"
                                    name='email'
                                    fullWidth
                                    autoComplete='false'
                                    value={email}
                                    onChange={e=>setEmail(e.target.value)}
                                />
                                <Snackbar className="alert" open={open} autoHideDuration={6000} onClose={handleClose}>
                                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%'}}>
                                    Wrong email format
                                    </Alert>
                                </Snackbar>
                            </Stack>
                            <TextField
                                required
                                id="outlined-required"
                                label="Subject"
                                name='subject'
                                fullWidth
                                autoComplete='false'
                                value={subject}
                                onChange={e=>setSubject(e.target.value)}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Message"
                                name="message"
                                fullWidth
                                multiline
                                autoComplete='false'
                                InputProps={{sx:{height: 200,backgroundColor:'black',color:'white'}}}
                                value={message}
                                onChange={e=>setMessage(e.target.value)}
                            />
                            <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </section>
    )
}