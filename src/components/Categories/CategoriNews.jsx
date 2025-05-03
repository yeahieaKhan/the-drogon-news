import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";

const CategoriNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data);
  console.log(id);
  const [categoriNews, setCategoriNews] = useState([""]);

  useEffect(() => {
    if (id == "0") {
      setCategoriNews(data);
      return;
    } else if (id == "1") {
      const allNews = data.filter((news) => news.others.is_today_pick === true);
      console.log(allNews);
      setCategoriNews(allNews);
    } else {
      const allNews = data.filter((news) => news.category_id === parseInt(id));
      console.log(allNews);
      setCategoriNews(allNews);
    }
  }, [data, id]);
  return (
    <div>
      <h2>categori news {categoriNews.length}</h2>
      <div className="grid grid-cols-1 gap-5">
        {categoriNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoriNews;
