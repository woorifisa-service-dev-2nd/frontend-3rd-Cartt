import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

import { ScreenContext, ScreenDispatchContext } from '@/component/context/ScreenContext.jsx'


const ProductItem = ({id,name,price,img}) => {
    const [items, viewItem] = React.useContext(ScreenContext);
    const [dispatch, sliderDispatch] = React.useContext(ScreenDispatchContext);

    // const id = viewItem.id

    return (
        <Card sx={{ maxWidth: 1000 }}>
            <CardMedia
                sx={{ height: 300 }}
                image={img}
                
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="big" sx={{ fontSize: '30px' }} onClick={()=>dispatch( {type: 'inc', id} )} > + </Button>
                {items[id-1].amount}
                <Button size="big" sx={{ fontSize: '30px' }} onClick={()=>dispatch( {type: 'dec', id} )}> - </Button>
            </CardActions>
        </Card>
    )
}

export default ProductItem