import { UnsplashResponse } from "../types/unsplash";
const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

if (!UNSPLASH_ACCESS_KEY) {
  throw new Error("Missing Unsplash API key");
}

export const fetchImages = async (
  query: string = "sports",
  page: number = 1,
  perPage: number = 20
): Promise<UnsplashResponse> => {
  if (query === "") {
    return { results: [], total: 0, total_pages: 0, per_page: 0 };
  }
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
