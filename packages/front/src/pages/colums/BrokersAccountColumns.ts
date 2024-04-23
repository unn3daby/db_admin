import { QTableProps } from 'quasar';

export default <QTableProps['columns']>[
  {
    name: 'id',
    label: 'ID',
    align: 'left',
    field: 'id',
    sortable: true,
  },
  {
    name: 'brokerId',
    label: 'ID брокера',
    align: 'left',
    field: 'brokerId',
    sortable: true,
  },
  {
    name: 'capital',
    align: 'left',
    label: 'Капитал',
    field: 'capital',
    sortable: true,
  },
  {
    name: 'createdAt',
    label: 'Создан',
    align: 'left',
    sortable: true,
    field: 'createdAt',
    format: (val: string) =>
      `${new Date(val).toLocaleDateString()} ${new Date(val).toLocaleTimeString()}`,
  },
  {
    name: 'controls',
    align: 'right',
  },
];
