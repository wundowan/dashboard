import React, {Fragment, useState, useEffect} from "react" ;
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('3f8137d4b5474ecf8b8f0aebb0afb18e');

const ListNews = () => {
  const [news, setNews] = useState([]);

/*  async function getNews() {
    newsapi.v2.topHeadlines({

      q: 'bitcoin',

    }).then(response => {
      console.log(response)
      const newsArray = response.articles;
      setNews(newsArray);
    })

  }
  */

  async function getNews() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=3f8137d4b5474ecf8b8f0aebb0afb18e',
    { json: true }, (err, res, body) => {
        if (err) {
          return console.log(err);
         }
         console.log(response);
       console.log(body.url);
       console.log(body.explanation);
    });
      const tickArray = await response.json();
    setNews(tickArray);
  }

  useEffect(() => {
    getNews()
  }, []
);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {news.map((item) => (
            <tr key={item.url}>
              <td>{item.author}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default ListNews;
