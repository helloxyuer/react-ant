const menuList = [
  {
    icon:'mail',
    title: '我的邮箱',
    key: '/email'
  },
  {
    icon:'calendar',
    title: '我的日历',
    key: '/calendar'
  },
  {
    icon:'home',
    title: '我的商店',
    key: '/home',
    children: [
      {
        title: '我的订单',
        key: '/home/homepage1',
      },
      {
        title: '我的商品',
        key: '/home/homepage2',
      },
      {
        title: '商店消息',
        key: '/home/homepage3',
        children: [
          {
            title: '我的投诉',
            key: '/shop/buttons',
          },
          {
            title: '我的建议',
            key: '/shop/modals',
          },
          {
            title: '我的评价',
            key: '/shop/loadings',
          }
        ]
      }
    ]
  }
];
export default menuList;
