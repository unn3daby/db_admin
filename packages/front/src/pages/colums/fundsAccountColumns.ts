import { QTableProps } from 'quasar';

export default <QTableProps['columns']>[
  {
    name: 'id',
    label: 'ID',
    align: 'left',
    field: 'id',
  },
  {
    name: 'fundId',
    label: 'ID фонда',
    align: 'left',
    field: 'fundId',
  },
  {
    name: 'createdAt',
    align: 'left',
    label: 'Создан',
    field: 'createdAt',
    format: (val: string) =>
      `${new Date(val).toLocaleDateString()} ${new Date(val).toLocaleTimeString()}`,
  },
  {
    name: 'capital',
    align: 'left',
    label: 'Капитал',
    field: 'capital',
  },
  {
    name: 'controls',
    align: 'right',
  },
];
