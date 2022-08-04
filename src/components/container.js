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
                    backgroundColor: '#a4747c', height: '80vh'
                }}>
                    {children}
                </Typography>
            </Container>
        </React.Fragment>
    );
}
