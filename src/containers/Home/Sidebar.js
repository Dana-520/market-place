import { Grid,makeStyles, Paper } from '@material-ui/core';
import React, { useContext} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { productsContext } from '../../contexts/ProductsContext';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary
    }
}))



const Sidebar = () => {

    const classes = useStyles();
    const { filterProducts } = useContext(productsContext)

    return (
        <Grid item md={3}>
            <Paper className={classes.paper}>
           <Grid>
            <FormControl component="fieldset">
                <FormLabel component="legend">Memory</FormLabel>
                    <RadioGroup aria-label="memory" name="memory1" onChange={(event) => filterProducts(event.target.value)}>
                        <FormControlLabel value="64" control={<Radio />} label="64" />
                        <FormControlLabel value="128" control={<Radio />} label="128" />
                        <FormControlLabel value="256" control={<Radio />} label="256" />
                        <FormControlLabel value="512" control={<Radio />} label="512" />
                        <FormControlLabel value="1024" control={<Radio />} label="1024" />
                        <FormControlLabel value="" control={<Radio />} label="All" />
                    </RadioGroup>
                </FormControl>
           </Grid>
            <Grid>
                <FormControl component="fieldset">
                <FormLabel component="legend">Price</FormLabel>
                    <RadioGroup aria-label="price" name="price1" onChange={(event) => filterProducts(event.target.value)}>
                        <FormControlLabel value="1000" control={<Radio />} label="До 1000" />
                        <FormControlLabel value="2000" control={<Radio />} label="До 2000" />
                        <FormControlLabel value="5000" control={<Radio />} label="До 5000" />
                        <FormControlLabel value="10000" control={<Radio />} label="До 10000" />
                        <FormControlLabel value="15000" control={<Radio />} label="До 15000" />
                        <FormControlLabel value="" control={<Radio />} label="All" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid>
                <Slider
                    // value={value}
                    // onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    // getAriaValueText={valuetext}
                    />
            </Grid>
            </Paper>
        </Grid>
    );
};

export default Sidebar;