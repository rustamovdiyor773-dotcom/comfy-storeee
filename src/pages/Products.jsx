import React from 'react'
import Filters from '../components/Filters'
import { fetchData } from '../utils'
import { useQuery } from '@tanstack/react-query'
import ProductsCard from '../components/ProductsCard'
import { Link } from 'react-router-dom'
// import ProductDetails from '../components/ProductDetails'

const url = "products"

function Products() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', url],
    queryFn: () => fetchData(url)
  });

  if (isLoading)
    return <div>Loading...</div>

  if (isError)
    return <div>Error...</div>
  console.log(data);
  const products = data.data;
  return (
    <div className="container-element ">
      <Filters />
      <div className="flex flex-wrap justfy-center items-center gap-5">
        {
          products.map((product) => {
            return (
              <Link key={product.id} to={`/products/${product.id}`} >
                <ProductsCard rasm={product.attributes.image} title={product.attributes.title} narx={product.attributes.price} alt={product.attributes.description} />
              </Link>
            )
          })}
      </div>
    </div>
  )
}

export default Products




