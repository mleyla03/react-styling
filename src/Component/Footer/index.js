import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Style from "./index.module.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12} md={12} sm={12} lg={12}>
           <div className={Style.footer}>
             <h5>Footer</h5>
             <p>Something here to give the footer a purpose! Copyright © <a className={Style.link} href='#' >Your Website 2023</a> .</p>
           </div>
        </Grid>
       
      </Grid>
    </Box>
  );
}