import React from 'react'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Style from "./index.module.css"
import Grid from '@mui/material/Grid';
export default function Main() {
  return (
    <>

<Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12} sm={12}>
                <div className={Style.main}>
                   <h1>Album layout</h1>
                   <p  className={Style.short}>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                  <Stack spacing={2} direction="row">
     
               <Button variant="contained">Main Call To Action</Button>
                <Button variant="outlined">Secondary Action</Button>
               </Stack>
    
             </div>
        </Grid>
        
      </Grid>

    
    </>
  )
}
