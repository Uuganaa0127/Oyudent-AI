// pages/products/[id].js

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <div className="p-6">Loading product details...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-64 h-64 object-contain mb-4" />
      <p className="mb-2">{product.description}</p>
      <p className="text-xl font-bold">${product.price}</p>
    </div>
  );
}
