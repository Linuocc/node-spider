const Spider = require("linuocc-spider");


const spider = new Spider(["http://xuyang.run"], {
  linkPoolMaxNum: 500,
  delayTime: 500,
  timeout: 3000,
  encoding: "utf8",
  fileTypesIgnored: ["js", "css", "json"],
  domainIgnored: ["github.com"],
  onlySite: true
});


spider.start(async (res, next) => {
  console.log(res.url);
  next();
});