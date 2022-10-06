import React from "react";
import { Collection } from "./Collection";

const PhotoBlock = ({ searchValue, photos }) => {
  return (
    <>
      {photos
        .filter((item) => {
          if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
            return true;
          }
          return false;
        })
        .map((item, i) => (
          <Collection key={i} name={item.name} images={item.photos} />
        ))}
    </>
  );
};

export default PhotoBlock;
