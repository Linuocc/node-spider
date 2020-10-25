# 基于node的爬虫封装





## 1.安装

```shell
npm install linuocc-spider
```



## 2.使用

```js
//导入linuocc-spider
const Spider = require("linuocc-spider");


//实例化spider
const spider = new Spider(["http://baidu.com"], {
  linkPoolMaxNum: 500,
  delayTime: 500,
  timeout: 3000,
  encoding: "utf8",
  fileTypesIgnored: ["js", "css", "json"],
  domainIgnored: ["github.com"],
  onlySite: true
});

//调用开始爬取方法，方法需要传入一个回调函数，回调函数有两个参数，一个是返回的数据，一个是触发下一次爬取的方法，数据处理完之后一定要调用next()方法，否则不会继续爬取
spider.start((res, next) => {
  console.log(res.url);
  
  next();
  
});
```

## 3.配置项

|      配置名      |                   说明                   |  类型   |        默认值         |
| :--------------: | :--------------------------------------: | :-----: | :-------------------: |
|  linkPoolMaxNum  | 链接池（存储待爬取链接的容器）最大容量， | number  |          500          |
|    delayTime     |      两次爬取之间的间隔（单位毫秒）      | number  |           0           |
|     timeout      |               爬取超时时间               | number  |         5000          |
|     encoding     |            响应数据的编码方式            | string  |         utf8          |
| fileTypesIgnored |            忽略爬取的文件类型            |  array  | ["js", "css", "json"] |
|  domainIgnored   |  忽略爬取的域名，包括二级域名，默认为空  |  array  |          [ ]          |
|     onlySite     | 是否只爬取本站点，默认为否，爬取其他站点 | boolean |         false         |





## 4.返回数据

#### spider.start(callback)

##### 		callback(result,next):回调函数

###### 				result:返回的结果，为一个对象

| 属性名 |            说明            |  类型  |
| :----: | :------------------------: | :----: |
|  url   |     当前爬取的页面url      | string |
|  data  | 当前爬取页面的全部html数据 | string |

​	result示例						

```js
{
	url:"http://www.baidu.com/a.php?a=b",
    data:'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Title</title></head><body></body></html>'
}
```

###### 				next:触发进行下一次爬取的方法

​	next示例

```js
spider.start((res, next) => {
  console.log(res.url);
  /*
  这里进行业务处理
  */
  next();//处理完之后调用next方法
});
```

