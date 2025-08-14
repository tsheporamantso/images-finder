import React from "react";
import { useQuery } from "@tanstack/react-query";
import customFetch from "../utils/custom";
import { toast } from "react-toastify";

const Gallery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const { data } = await customFetch.get(
        "/?client_id=qSy-m1aN21b8mhwk1PvoyLHxH8CJRd6pS_20FeYN7Wo&query=office"
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

  if (error) {
    return toast.error(error.message);
  }

  return (
    <section className="image-container">
      {data.results.map(({ id, urls: { regular }, alt_description }) => {
        return (
          <div key={id}>
            <img className="img" src={regular} alt={alt_description} />
          </div>
        );
      })}
    </section>
  );
};

export default Gallery;
