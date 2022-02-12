import { Alert, Button, Paper, Snackbar, Typography } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { forwardRef, SyntheticEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/cart/types';

interface CatalogItemProps {
    product: IProduct;
}

export function CatalogItem({ product }: CatalogItemProps){

    const dispatch = useDispatch();
    const hasFailedStockCheck = useSelector<IState, boolean>(state => {
        return state.cart.failedStockCheck.includes(product.id);
    });

    const handleAddProductToCart = useCallback(() => {
        dispatch(addProductToCartRequest(product));
    }, [dispatch, product])

    const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
    ){
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;    
    });

    const [open, setOpen] = useState(true);

    function handleClose(event?: SyntheticEvent | Event, reason?: string){
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    return (
        <>
            <Paper elevation={3}
                sx={{
                    marginTop: '1rem',
                    padding: '1rem',
                }}
            >
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="h6">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</Typography>
                <Button variant="contained"
                    sx={{

                        justifyContent: 'flex',
                    }}
                    onClick={handleAddProductToCart}
                >
                    Comprar
                </Button>
                { hasFailedStockCheck && 
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error" sx={{width: '100%'}} >
                            Falta de estoque
                        </Alert>
                    </Snackbar>
                }
            </Paper>
        </>
    )
}

