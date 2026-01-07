import React from 'react'

interface Props{
    params: { slug: string[] };
    searchParams: { sortOrder: string  };
}

const ProductPage = async({params: {slug}, searchParams: {sortOrder} }: Props) => {
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage