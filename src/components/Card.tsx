// src/components/ImageCard.tsx
import React from "react";
import styled from "styled-components";
import { UnsplashImage } from "../types/unsplash";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  height: fit-content;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Info = styled.div`
  padding: 1rem;
  background-color: #f9f9f9;
`;

const Photographer = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin: 0;
`;

interface ImageCardProps {
  image: UnsplashImage;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <Card>
      <Image
        src={image.urls.small}
        alt={image.alt_description || "Unsplash image"}
        loading="lazy"
      />
      <Info>
        <Photographer>📸 {image.user.name}</Photographer>
      </Info>
    </Card>
  );
};

export default ImageCard;
