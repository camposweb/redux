import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import api from '../../services/api';;
import { IProduct } from '../../store/modules/cart/types';
import { CatalogItem } from '../CatalogItem';


export function Catalog(){

    const [catalog, setCatalog] = useState<IProduct[]>([]);

    useEffect(() => {
        api.get('products').then(response => {
            setCatalog(response.data);
        })
    }, [])

    return (
        <>
        <Box
            sx={{
                marginTop: '1rem',
                
            }}
        >
            <Typography variant="h3">Catálogo</Typography>
            {catalog.map(product => (
                <CatalogItem key={product.id} product={product} />
            ))}
            
        </Box>
        </>
    )
}