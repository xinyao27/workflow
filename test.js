const Parser = require('rss-parser');
const parser = new Parser();

(async () => {

  let feed = await parser.parseURL('https://rsshub.app/bilibili/ranking/0/1/1');
  console.log(feed);
})();
