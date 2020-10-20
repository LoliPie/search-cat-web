let engineList = [
  {
    id: 0,
    name: '百度',
    cmd: 'bd',
    searchUrl: 'https://www.baidu.com/s?wd={query}',
    themeColor: '#D11F16',
    imgName: 'baidu'
  },
  {
    id: 1,
    name: 'Google',
    cmd: 'gg',
    searchUrl: 'https://www.google.com/search?q={query}',
    themeColor: '#319E4F',
    imgName: 'google'
  },
  {
    id: 2,
    name: 'DuckDuckGo',
    cmd: 'dg',
    searchUrl: 'https://duckduckgo.com/?q={query}',
    themeColor: '#FAB42D',
    imgName: 'duckduckgo'
  },
  {
    id: 3,
    name: '谷歌翻译',
    cmd: 'ggtr',
    searchUrl: 'https://translate.google.com/m/translate#auto/zh-CN/{query}',
    themeColor: '#319E4F',
    imgName: 'google-translate'
  },
  {
    id: 4,
    name: '生医专业词典',
    cmd: 'bm',
    searchUrl: 'http://dict.bioon.com/search.asp?txtitle={query}',
    themeColor: '#5185EC',
    imgName: 'biomedical'
  },
  {
    id: 5,
    name: 'Unsplash',
    cmd: 'us',
    searchUrl: 'https://500px.com/search?q={query}',
    themeColor: '#333333',
    imgName: 'unsplash'
  },
  {
    id: 6,
    name: '豆瓣电影',
    cmd: 'dbm',
    searchUrl: 'http://movie.douban.com/subject_search?search_text={query}',
    themeColor: '#3DB454',
    imgName: 'douban-movie'
  },
  {
    id: 7,
    name: 'Wiki',
    cmd: 'wk',
    searchUrl: 'https://zh.wikipedia.org/wiki/Special:Search/{query}',
    themeColor: '#444444',
    imgName: 'wiki'
  }
]

export default {
  engineList
}
