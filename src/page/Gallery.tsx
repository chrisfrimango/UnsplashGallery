import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { UnsplashImage } from "../types/unsplash";
import { fetchImages } from "../api/unsplashApi";
import ImageCard from "../components/Card";
import Error from "../lib/Error";
import Loading from "../lib/Loading";
import Pagination from "../components/Pagination";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  grid-auto-rows: auto;
`;

const SearchInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 300px;
  text-align: center;
  border-radius: 8px;
  border: none;
  background-color: #c45d5d;
  color: #fff;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-style: italic;
  }

  &:focus::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const Gallery: React.FC = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [query, setQuery] = useState("sports");
  const [page, setPage] = useState(1);
  const perPage = 20;
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const loadImages = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchImages(query, page, perPage);
      setImages(data.results);
      setTotalPages(Math.ceil(data.total / perPage));
    } catch (err) {
      console.log(err);
      setError("Cant find images, failed to load images");
    } finally {
      setLoading(false);
    }
  }, [query, page, perPage]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <SearchInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search images..."
      />
      {error ? (
        <Error message={error} />
      ) : loading ? (
        <Loading height="200px" />
      ) : (
        <>
          <ImageGrid>
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </ImageGrid>

          {!loading && totalPages > 1 && (
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default Gallery;
