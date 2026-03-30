interface ProductInput {
  price: number;
  rating: number;
}

export function calculateBestValue(
  product: ProductInput,
  categoryProducts: ProductInput[]
): number {
  const prices = categoryProducts.map((p) => p.price);
  const ratings = categoryProducts.map((p) => p.rating);

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const minRating = Math.min(...ratings);
  const maxRating = Math.max(...ratings);

  const normPrice =
    maxPrice === minPrice
      ? 0.5
      : (product.price - minPrice) / (maxPrice - minPrice);
  const normRating =
    maxRating === minRating
      ? 0.5
      : (product.rating - minRating) / (maxRating - minRating);

  // Higher rating + lower price = higher score
  return parseFloat(((1 - normPrice) * 0.5 + normRating * 0.5).toFixed(4));
}
