import { Grid, Paper, TextField } from '@mui/material'
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import React, { useState } from 'react';

const ContactUs = () => {
  // Define state variables to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a data object with form values
    const formData = {
      name,
      email,
      phone,
      comment,
    };

    // Send the form data to the Google Apps Script web app
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwRW3KvpnzqeWKO7wRrRkf2j9uafNl68g77u-0ByzVOt0FnFRF_1yUQq7qkjJiF8LYU/exec', // Replace with your web app URL
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Form submitted successfully, you can show a success message or redirect the user
        console.log('Form submitted successfully');
      } else {
        // Handle errors, e.g., show an error message to the user
        console.error('Form submission failed');
      }
    } catch (error) {
      // Handle network errors
      console.error('Network error:', error);
    }
  };

  return (
    <Grid container width={'50%'} className='my-2 mx-auto'>
      <Paper elevation={0}>
        <Grid align={'center'}>
          <h2>Get in Touch</h2>
        </Grid>
        <Grid align={'center'}>
          <p>Please fill out the form below and our support team will get back to you within 48 hours.</p>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            className='m-2 w-100'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            className='m-2 w-100'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            id="phone"
            label="Phone no"
            variant="outlined"
            className='m-2 w-100'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Textarea
            id="comment"
            minRows={2}
            placeholder="Comment"
            variant="outlined"
            size="lg"
            className='m-2 w-100'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="solid"
            className='m-2'
            style={{ backgroundColor: '#F7DC5A', color: 'black', width: '40%', fontSize: '20px' }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default ContactUs;
