import { QTableProps } from 'quasar';

export default <QTableProps['columns']>[
  {
    name: 'id',
    label: 'ID',
    align: 'left',
    field: 'id',
  },
  {
    name: 'brokerId',
    label: 'ID брокера',
    align: 'left',
    field: 'brokerId',
  },
  {
    name: 'capital',
    align: 'left',
    label: 'Капитал',
    field: 'capital',
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
