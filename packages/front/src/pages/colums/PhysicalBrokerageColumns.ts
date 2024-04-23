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
    sortable: true,
  },
  {
    name: 'physicalPersonId',
    align: 'left',
    label: 'ID физического лица',
    field: 'physicalPersonId',
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
    align: 'left',
    label: 'Дата создания',
    field: 'createdAt',
    format: (val: string) =>
      `${new Date(val).toLocaleDateString()} ${new Date(val).toLocaleTimeString()}`,
    sortable: true,
  },
  {
    name: 'controls',
    align: 'right',
  },
];
