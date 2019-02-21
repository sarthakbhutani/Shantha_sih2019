const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('d110fc783f8743f28b0c132a3ed7a103');
 
// To query top headlinens
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  q: 'GMP',
  category: 'pharma',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
 
// To query everything
// You must include at least one q, source, or domain
newsapi.v2.everything({
  q: 'trump',
  sources: 'bbc-news,the-verge',
  domains: 'bbc.co.uk,techcrunch.com',
  from: '2017-12-01',
  to: '2019-2-20',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
 
// To query sources
// All options are optional
newsapi.v2.sources({
  category: 'technology',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      sources: [...]
    }
  */
});