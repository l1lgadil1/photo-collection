import React from "react";

import Search from "../UI/Search";
import Categories from "../Components/Categories";
import axios from "axios";
import PhotoBlock from "../Components/PhotoBlock";
import Pagination from "../UI/Pagination";

const Home = () => {
  const [photos, setPhotos] = React.useState([]);
  const [categoriesActive, setCategoriesActive] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const categoryParams =
    categoriesActive > 0 ? `category=${categoriesActive}` : ``;
  const pageParams = `page=${page}&limit=3`;

  React.useEffect(() => {
    axios
      .get(
        `https://62ffc93b9350a1e548e663ec.mockapi.io/items/photos?${categoryParams}&${pageParams}`
      )
      .then((obj) => {
        setPhotos(obj.data);
        setLoading(false);
      });
  }, [categoriesActive, pageParams]);

  return (
    <>
      <h1 className="font-[700] text-[40px]">Моя коллекция фотографий</h1>
      <div className="top flex justify-between my-10">
        <Categories
          categoriesActive={categoriesActive}
          setCategoriesActive={setCategoriesActive}
        />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      {searchValue && (
        <h1 className="my-10 font-[700] text-[40px]">
          Поиск по запросу : {searchValue}
        </h1>
      )}
      <div className="content">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <PhotoBlock searchValue={searchValue} photos={photos} />
        )}
      </div>
      <Pagination page={page} setPage={setPage} />
    </>
  );
};

export default Home;
