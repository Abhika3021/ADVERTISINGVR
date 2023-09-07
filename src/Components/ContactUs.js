import { Grid, Paper, TextField } from '@mui/material'
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';

import React from 'react'

const ContactUs = () => {
  return (
    <Grid conatiner width={'50%'} className='my-2 mx-auto'>
      <Paper elevation={0}>
        <Grid align={'center'}>
          <h2>Get in Touch</h2>
        </Grid>
        <Grid align={'center'}>
          <p>
          Please fill out the form below and our support team will get back to you within 48 hours. 
          </p>
        </Grid>
        <TextField id="outlined-basic" label="Name" variant="outlined" className='m-2 w-100' />
        <TextField id="outlined-basic" label="Email" variant="outlined" className='m-2 w-100' />
        <TextField id="outlined-basic" label="Phone no" variant="outlined" className='m-2 w-100' />
        <Textarea minRows={2} placeholder="Comment" variant="outlined" size="lg" className='m-2 w-100' />
        <Button variant="solid" className='m-2' style={{ backgroundColor: '#F7DC5A', color: 'black', width:'40%', fontSize:'20px' }}>Submit</Button>
      </Paper>
    </Grid>
  )
}

export default ContactUs