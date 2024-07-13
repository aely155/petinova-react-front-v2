import Header from '../../components/Header'
import LateralButtons from '../../components/LateralButtons';
import Cart from '../../components/Cart';
import Main from '../../components/Main';
import Grid from '../../components/Grid';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../../components/Product';

function ProductsPage() {
    const apiUrl = process.env.REACT_APP_API_URL
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(`${apiUrl}api/products/allproducts`).then((response) => {
            setProducts(response.data)
        })
    }, [apiUrl])
    return (
        <>
            <Cart />
            <LateralButtons />
            <Header />
            <Main>
                <Grid>
                    {products.map((product) => {
                        return (
                            <Product product={product}/>
                        )
                    })}
                </Grid>
            </Main>
        </>
    );
}

export default ProductsPage;