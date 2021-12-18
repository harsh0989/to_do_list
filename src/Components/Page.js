import { Grid, TextField} from '@mui/material'
import React from 'react'

const Page = () => {
    return (
        <>
            <Grid container spacing={5} columns={22}>
                <Grid item xs={11}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>
                <Grid item xs={3}><TextField id="outlined-basic" label="Outlined" variant="outlined" /></Grid>
                <Grid item xs={2}><TextField id="outlined-basic" label="Outlined" variant="outlined" /></Grid>
                <Grid item xs={2}><TextField id="outlined-basic" label="Outlined" variant="outlined" /></Grid>
                <Grid item xs={3}><TextField id="outlined-basic" label="Outlined" variant="outlined" /></Grid>
                <Grid item xs={4}><TextField id="outlined-basic" label="Outlined" variant="outlined" /></Grid>
                <Grid item xs={6}><TextField id="outlined-basic" label="Outlined" variant="outlined" /></Grid>
                <Grid item xs={2}><TextField id="outlined-basic" label="Outlined" variant="outlined" /></Grid>






            </Grid>
        </>
    )
}

export default Page
