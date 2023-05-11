import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Dizayn  from "./index.module.css"
import { Button } from '@mui/material';
import Buttons from '../Button';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment >
       
      <Grid item lg={4} md={6} sm={12} xs={12} >
        <Item  className={Dizayn.idem}><div className={Dizayn.div}><img src="https://source.unsplash.com/random" className={Dizayn.image}></img><h3 className={Dizayn.heading}>Heading</h3><p className={Dizayn.texts}>This is a media card. You can use this section to describe the content.</p><Buttons></Buttons></div></Item>
      </Grid>

      <Grid item lg={4} md={6} sm={12} xs={12}>
        <Item  className={Dizayn.idem}><div className={Dizayn.div}><img src="https://source.unsplash.com/random" className={Dizayn.image}></img><h3 className={Dizayn.heading}>Heading</h3><p className={Dizayn.texts}>This is a media card. You can use this section to describe the content.</p><Buttons></Buttons></div></Item>
      </Grid>

      <Grid item lg={4} md={6} sm={12} xs={12}>
        <Item className={Dizayn.idem}><div className={Dizayn.div}><img src="https://source.unsplash.com/random" className={Dizayn.image}></img> <h3 className={Dizayn.heading}>Heading</h3><p className={Dizayn.texts}>This is a media card. You can use this section to describe the content.</p><Buttons></Buttons></div></Item>
      </Grid>
      <Grid item lg={4} md={6} sm={12} xs={12} >
        <Item  className={Dizayn.idem}><div className={Dizayn.div}><img src="https://source.unsplash.com/random" className={Dizayn.image}></img><h3 className={Dizayn.heading}>Heading</h3><p className={Dizayn.texts}>This is a media card. You can use this section to describe the content.</p><Buttons></Buttons></div></Item>
      </Grid>

      <Grid item lg={4} md={6} sm={12} xs={12}>
        <Item  className={Dizayn.idem}><div className={Dizayn.div}><img src="https://source.unsplash.com/random" className={Dizayn.image}></img><h3 className={Dizayn.heading}>Heading</h3><p className={Dizayn.texts}>This is a media card. You can use this section to describe the content.</p><Buttons></Buttons></div></Item>
      </Grid>

      <Grid item lg={4} md={6} sm={12} xs={12}>
        <Item className={Dizayn.idem}><div className={Dizayn.div}><img src="https://source.unsplash.com/random" className={Dizayn.image}></img> <h3 className={Dizayn.heading}>Heading</h3><p className={Dizayn.texts}>This is a media card. You can use this section to describe the content.</p><Buttons></Buttons></div></Item>
      </Grid>
      <Grid item lg={4} md={6} sm={12} xs={12} >
        <Item  className={Dizayn.idem}><div className={Dizayn.div}><img src="https://source.unsplash.com/random" className={Dizayn.image}></img><h3 className={Dizayn.heading}>Heading</h3><p className={Dizayn.texts}>This is a media card. You can use this section to describe the content.</p><Buttons></Buttons></div></Item>
      </Grid>

      <Grid item lg={4} md={6} sm={12} xs={12}>
        <Item  className={Dizayn.idem}><div className={Dizayn.div}><img src="https://source.unsplash.com/random" className={Dizayn.image}></img><h3 className={Dizayn.heading}>Heading</h3><p className={Dizayn.texts}>This is a media card. You can use this section to describe the content.</p><Buttons></Buttons></div></Item>
      </Grid>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <Item className={Dizayn.idem}><div className={Dizayn.div}><img src="https://source.unsplash.com/random" className={Dizayn.image}></img> <h3 className={Dizayn.heading}>Heading</h3><p className={Dizayn.texts}>This is a media card. You can use this section to describe the content.</p><Buttons></Buttons></div></Item>
      </Grid>
   
      
    </React.Fragment>
  );
}

export default function Image() {
  return (
    <Box sx={{ flexGrow: 1 }} className={Dizayn.opshi} >
      <Grid container spacing={1}>
     <FormRow/>
      </Grid>
      
    </Box>
    
  );
}
