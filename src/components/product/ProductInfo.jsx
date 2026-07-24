export default function ProductInfo({product}) {
  const { image, title, price, rating } = product;

  return (
    <div>
      <img src={image} alt={title} />
      <h1>{title}</h1>
        <p>{price}</p>
        <span>{rating.rate}</span>
        <span>{rating.count}</span>
    </div>
  );
}
