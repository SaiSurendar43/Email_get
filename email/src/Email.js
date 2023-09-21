
import React, { useState } from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Container, Typography, TextField, Button, } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Email = () => {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);


    const handleFileChange = () => {

    }

    const handleSubmit = () => {

    }

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)', // Add your desired shadow here
                    borderRadius: '8px', // Optional: Add some border radius for rounded corners
                    padding: '16px', marginTop: '100px' // Optional: Add padding for space around the form
                }}
            >
                <form className='margin' onSubmit={handleSubmit}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Email
                    </Typography>
                    <TextField
                        label="To"
                        size='small'
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                    />
                    <TextField
                        label="Subject"
                        size='small'
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        type="password"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <TextField
                        label="Message"
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        required
                        style={{ display: 'none' }}
                        id="attachment-input"
                    />
                      <label htmlFor="attachment-input">
                    <Button sx={{ marginTop: '10px' }} component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                        Upload Attachment
                        <VisuallyHiddenInput type="file" />
                    </Button>
                    </label>
                     {file && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CloudUploadIcon sx={{ marginRight: '8px' }} />
              <Typography>{file.name}</Typography>
            </Box>
          )}
          <Button sx={{marginTop:'10px'}}
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            size="small"
          >
            Send Email
          </Button>
                </form>
            </Box>
        </Container>
    )
}

export default Email

