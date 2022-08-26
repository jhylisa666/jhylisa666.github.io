import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

export default function SimpleContainer({ children }) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <Typography component="div" style={{
                    backgroundColor: '#a4747c', height: '75vh', 
                    border: '10px solid #6f6068', 
                    borderStyle: 'double'
                }}>
                    {children}
                </Typography>
            </Container>
        </React.Fragment>
    );
}
