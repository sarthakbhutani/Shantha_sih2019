const express = require("express");
const router = express.Router();
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("d110fc783f8743f28b0c132a3ed7a103");

router.get("/headlines", (req, res) => {
  newsapi.v2
    .everything({
      q: "pakistan",
      sources: "bbc-news,the-verge",
      domains: "bbc.co.uk,techcrunch.com",
      from: "2019-1-29",
      to: "2019-2-20",
      language: "en",
      sortBy: "relevancy",
      page: 2
    })
    .then(response => {
      console.log(response.articles);
        res.render("news", { headline: response.articles[0].title });
    });
});

module.exports = router;
