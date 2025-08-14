import React from "react";
import { useQuery } from "@tanstack/react-query";
import customFetch from "../utils/custom";
import { useGlobalContext } from "../context/context";

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const { data } = await customFetch.get(
        `/?client_id=${import.meta.env.VITE_API_KEY}&query=${searchTerm}`
      );
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="image-container">
        <p style={{ color: "green" }}>Loading</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="image-container">
        <p style={{ color: "red" }}>An error occurred: {error.message}</p>
      </div>
    );
  }

  return (
    <section className="image-container">
      {(data?.results || []).map(
        ({ id, urls: { regular }, alt_description }) => {
          return (
            <div key={id}>
              <img className="img" src={regular} alt={alt_description} />
            </div>
          );
        }
      )}
    </section>
  );
};

export default Gallery;
