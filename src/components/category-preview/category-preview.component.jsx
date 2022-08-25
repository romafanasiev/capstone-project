import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewInfo,
  CategoryTitle,
  CategoryPreviewContainer,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <CategoryTitle>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </CategoryTitle>
      <CategoryPreviewInfo>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </CategoryPreviewInfo>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
