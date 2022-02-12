import {
    Box,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';

import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';


export function Cart() {

    const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items)

    return (
        <>
            <Container>
                <Box
                    sx={{
                        marginTop: '1rem',
                    }}
                >
                    <Typography variant="h3">Carrinho</Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Produto</TableCell>
                                    <TableCell>Preço</TableCell>
                                    <TableCell>Quantidade</TableCell>
                                    <TableCell>Subtotal</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.map(item => (
                                    <TableRow key={item.product.id}>
                                        <TableCell>{item.product.title}</TableCell>
                                        <TableCell>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.product.price)}</TableCell>
                                        <TableCell>{item.quantity}</TableCell>
                                        <TableCell>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format((item.product.price * item.quantity))}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </>
    )
}