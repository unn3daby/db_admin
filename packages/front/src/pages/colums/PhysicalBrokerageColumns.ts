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
    name: 'physicalPersonId',
    align: 'left',
    label: 'ID физического лица',
    field: 'physicalPersonId',
  },
  {
    name: 'capital',
    align: 'left',
    label: 'Капитал',
    field: 'capital',
  },
  {
    name: 'createdAt',
    align: 'left',
    label: 'Дата создания',
    field: 'createdAt',
    format: (val: string) =>
      `${new Date(val).toLocaleDateString()} ${new Date(val).toLocaleTimeString()}`,
  },
  {
    name: 'controls',
    align: 'right',
  },
];
