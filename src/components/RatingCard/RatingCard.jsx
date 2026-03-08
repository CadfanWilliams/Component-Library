import React from "react";
import { Title, CardContainer } from "./RatingCard.styles";

export default function Card({ title, description, rating }) {
  return (
    <CardContainer>
      <div>
        {title && <Title>{title}</Title>}
        {rating && <p className="card-rating">{rating} OUT OF 5</p>}
        {description && <p className="card-description">{description}</p>}
        <p>Product Rating "feefo"</p>
      </div>
    </CardContainer>
  );
}
