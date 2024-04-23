import { QTableProps } from 'quasar';

export default <QTableProps['columns']>[
  {
    name: 'id',
    label: 'ID',
    align: 'left',
    field: 'id',sortable: true,
  },
  {
    name: 'fundId',
    label: 'ID фонда',
    align: 'left',
    field: 'fundId',sortable: true,
  },
  {
    name: 'createdAt',
    align: 'left',
    label: 'Создан',
    field: 'createdAt',
    format: (val: string) =>
      `${new Date(val).toLocaleDateString()} ${new Date(val).toLocaleTimeString()}`,sortable: true,
  },
  {
    name: 'capital',
    align: 'left',
    label: 'Капитал',sortable: true,
    field: 'capital',
  },
  {
    name: 'controls',
    align: 'right',
  },
];
