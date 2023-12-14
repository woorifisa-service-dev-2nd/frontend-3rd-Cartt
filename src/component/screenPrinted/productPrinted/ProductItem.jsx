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


const ProductItem = () => {
    const [items, viewItem] = React.useContext(ScreenContext);
    const [dispatch, sliderDispatch] = React.useContext(ScreenDispatchContext);

    const id = viewItem.id

    return (
        <Card sx={{ maxWidth: 1000 }}>
            <CardMedia
                sx={{ height: 500 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    유기농 곡물빵
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    국내산 유기농 통밀로 만든 맛좋은 통밀빵입니다!
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