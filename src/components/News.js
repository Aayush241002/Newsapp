import React, { useEffect, useState } from 'react';

import NewsItem from './NewsItem';
import defaultImg from './news-default-big.png';
import PropTypes from 'prop-types';
import Loading from './Loading';

import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const host = process.env.REACT_APP_API_BASE_URL;

  const capitalizeFirstLetter = (str) => {
    if (typeof str !== 'string' || str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    pageloader(1); // Load first page on mount
  }, [props.category, props.pagesize, props.country]);

  const pageloader = async (pageNumber = 1) => {
    props.setprogress(50);

    let url = `${host}/api/news?category=${props.category}&page=${pageNumber}&pageSize=${props.pagesize}`;
    if (props.country) {
      url += `&country=${props.country}`;
    }

    setloading(true);

    try {
      let data = await fetch(url);
      let parsedData = await data.json();

      if (parsedData.status === "error") {
        if (pageNumber !== 1) {
          setpage(1);
          pageloader(1);
        }
        return;
      }

      setarticles(parsedData.articles);
      settotalResults(parsedData.totalResults);
      setpage(pageNumber);
    } catch (error) {
      console.error("Failed to load news:", error);
    }

    setloading(false);
    props.setprogress(100);
  };

  const fetchMoreData = async () => {
    const nextPage = page + 1;

    let url = `${host}/api/news?category=${props.category}&page=${nextPage}&pageSize=${props.pagesize}`;
    if (props.country) {
      url += `&country=${props.country}`;
    }

    setloading(true);

    try {
      let data = await fetch(url);
      let parsedData = await data.json();

      setarticles(articles.concat(parsedData.articles));
      settotalResults(parsedData.totalResults);
      setpage(nextPage);
    } catch (error) {
      console.error("Failed to load more news:", error);
    }

    setloading(false);
  };

  const handlePrevious = async () => {
    if (page > 1) {
      await pageloader(page - 1);
    }
  };

  const handleNext = async () => {
    if (page < Math.ceil(totalResults / props.pagesize)) {
      await pageloader(page + 1);
    }
  };

  const handleFirst = async () => {
    await pageloader(1);
  };

  const handleLast = async () => {
    await pageloader(Math.ceil(totalResults / props.pagesize));
  };

  return (
    <div className="container" style={{ marginTop: "6rem", marginBottom: "1rem" }}>
      <h1 className='text-uppercase'>Top Headlines</h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<div className="d-flex justify-content-center my-4"><Loading /></div>}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url + element.publishedAt}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 80) : ""}
                  imageurl={element.urlToImage ? element.urlToImage : defaultImg}
                  date={element.publishedAt}
                  description={element.description ? element.description.slice(0, 300) : ""}
                  newsurl={element.url}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.propTypes = {
  category: PropTypes.string.isRequired,
  pagesize: PropTypes.number,
  country: PropTypes.string,
  apikey: PropTypes.string,
  setprogress: PropTypes.func.isRequired,
};

News.defaultProps = {
  pagesize: 5,
  category: "general",
  country: "", // empty by default
  apikey: "", // optional, if backend used, frontend key not needed
};

export default News;
