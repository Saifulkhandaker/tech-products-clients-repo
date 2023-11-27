import React from 'react';
import useProducts from '../../../hooks/useProducts';

const MyProduct = () => {

    const [products] = useProducts();
    const myProducts = products.filter(product => product.ownerName);
    console.log(myProducts);

    return (
        <div>
        </div>
    );
};

export default MyProduct;