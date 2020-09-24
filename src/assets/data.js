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
  }
]

export default {
  engineList
}
