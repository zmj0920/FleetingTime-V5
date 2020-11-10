const genList = (pageNo, pageSize) => {
  const tableListDataSource = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index = (pageNo - 1) * 10 + i;
    tableListDataSource.push({
      id: i,
      key: index,
      disabled: i % 6 === 0,
      href: 'https://ant.design',
      avatar: [
        'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
        'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      ][i % 2],
      name: `TradeCode ${index}`,
      owner: '曲丽丽',
      desc: '这是一段描述',
      callNo: Math.floor(Math.random() * 1000),
      status: (Math.floor(Math.random() * 10) % 2).toString(),
      updatedAt: new Date(),
      createdAt: new Date(),
      createdAtRange: [
        Date.now() - Math.floor(Math.random() * 2000),
        Date.now() - Math.floor(Math.random() * 2000),
      ],
      progress: Math.ceil(Math.random() * 100),
    });
  }

  tableListDataSource.reverse();
  return tableListDataSource;
};

let tableListDataSource = genList(1, 100);

function getRule(req, res) {
  const { current, pageSize } = req.body;
  let dataSource = [...tableListDataSource].slice((current - 1) * pageSize, current * pageSize);
  const result = {
    code: 200,
    success: true,
    data: dataSource,
    total: tableListDataSource.length,
    pageSize: pageSize,
    current: current,
    message: '',
  };
  return res.json(result);
}

export default {
  'POST /api/test': getRule,
};
