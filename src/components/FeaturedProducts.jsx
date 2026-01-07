import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchData } from '../utils';
import ProductsCard from './ProductsCard';
import { Link } from 'react-router';

const url = "products?featured=true"

function FeaturedProducts() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['featured-products', url],
        queryFn: () => fetchData(url)
    });

    if (isLoading) {

        return <div>Loading...</div>
    }

    if (isError) {

        return <div>Error...</div>
    }
    const featuredProducts = data?.data;
    console.log(featuredProducts);

    return (
        <div>
            <h1 className="text-3xl font-semibold">Featured Products</h1>
            <div className="bg-neutral-content w-full h-px mt-5 mb-5"></div>
            <div className="flex flex-wrap justfy-center items-center gap-5">
                {
                    featuredProducts.map((product) => {
                        return (
                            <Link key={product.id} to={`/products/${product.id}`} >
                                <ProductsCard rasm={product.attributes.image} title={product.attributes.title} narx={product.attributes.price} alt={product.attributes.description} />
                            </Link>
                        )
                    })}
            </div>
        </div>
    );
}

export default FeaturedProducts




