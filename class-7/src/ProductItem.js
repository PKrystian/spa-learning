function ProductItem({key, brand, title}) {
  return (
    <li key={key}>
      {title} ({brand})
    </li>
  );
}

export default ProductItem;
