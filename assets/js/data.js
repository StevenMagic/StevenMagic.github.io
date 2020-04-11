(function () {
  const books = [
    {
      name: 'Jarry Chung',
      id: 1
    }, {
      name: 'Jarry Chung',
      id: 2
    }, {
      name: 'Jarry Chung',
      id: 3
    }
  ]

  // 挂载到全局下的 _page_
  window._page_ = {
    books
  }
})()
