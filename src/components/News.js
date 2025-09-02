import React, { useEffect, useState } from 'react';

import NewsItem from './NewsItem'
import defaultImg from './news-default-big.png';
import PropTypes from 'prop-types'
import Loading from './Loading';
// import Mainloading from './Mainloading';

import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {


  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  const host = process.env.REACT_APP_API_BASE_URL;

  const capitalizeFirstLetter = (str) => {
    if (typeof str !== 'string' || str.length === 0) {
      return str; // Handle non-string or empty input
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    pageloader();
  }, [])


  const pageloader = async () => {
    props.setprogress(50);

    let url = `${host}/api/news?country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pagesize}`;

    setloading(true);

    let data = await fetch(url);

    let parsedData = await data.json();
    if (parsedData.status === "error") {
      if (page !== 1) {
        setpage(1);

        pageloader(1);
      }
      return;
    }
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setpage(page);
    setloading(false);
    props.setprogress(100);

  }

  const fetchMoreData = async () => {

    const nextPage = page + 1;

    let url = `https://newsapi.org/v2/top-headlines?${props.country ? `country=${props.country}&` : ''}category=${props.category}&apiKey=${props.apikey}&pagesize=${props.pagesize}&page=${nextPage}`;

    setloading(true);

    let data = await fetch(url);
    let parsedData = await data.json();

    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    setpage(nextPage);
    setloading(false);

  }

  const handlePrevious = async () => {

    setpage(page - 1);

    pageloader()
  }
  const handleNext = async () => {

    setpage(page + 1);

    pageloader()

  }

  const handleFirst = async () => {
    setpage(1);
    pageloader();

  }

  const handleLast = async () => {
    setpage(Math.ceil(totalResults / props.pagesize))

    pageloader()

  }
  // if (state.loading) {
  //   return (
  //     <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
  //       <Mainloading />
  //     </div>
  //   );
  // }

  return (
    <div className="container" style={{ marginTop: "6rem", marginBottom: "1rem" }}>
      <h1 className='text-uppercase'>Top Headlines</h1>

      {/* <div className="container d-flex justify-content-around mt-3">
          <button type="button" className="btn btn-dark" onClick={handleFirst}>1</button>
          <button type="button" disabled={state.page <= 1} className="btn btn-dark" onClick={handlePrevious}>&#8249;</button>
          <button type="button" disabled={state.page >= Math.ceil(state.totalResults / props.pagesize)} className="btn btn-dark" onClick={handleNext}>&#8250;</button>
          <button type="button" className="btn btn-dark" onClick={handleLast}>
            {Math.ceil(state.totalResults / 15)}
          </button>
        </div>  */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<div className="d-flex justify-content-center my-4">
          <Loading />
        </div>}
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
}
News.propTypes = {
  category: PropTypes.string.isRequired,
  pagesize: PropTypes.number,
};

News.defaultProps = {
  pagesize: 5,
  category: "general",
  country: ""

};

export default News