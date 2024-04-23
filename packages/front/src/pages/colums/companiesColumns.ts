import { QTableProps } from 'quasar';

export default <QTableProps['columns']>[
  {
    name: 'id',
    label: 'ID',
    align: 'left',
    field: 'id',
  },
  {
    name: 'name',
    label: 'Название',
    align: 'left',
    field: 'name',
  },
  {
    name: 'revenue',
    align: 'left',
    label: 'Доход',
    field: 'revenue',
  },
  {
    name: 'marketCap',
    align: 'left',
    label: 'Капитал',
    field: 'marketCap',
  },
  {
    name: 'netIncome',
    align: 'left',
    label: 'Чистый доход',
    field: 'netIncome',
  },
  {
    name: 'createdAt',
    label: 'Создан',
    align: 'left',
    field: 'createdAt',
    format: (val: string) =>
      `${new Date(val).toLocaleDateString()} ${new Date(val).toLocaleTimeString()}`,
  },
  {
    name: 'controls',
    align: 'right',
  },
];
