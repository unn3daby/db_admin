import { QTableProps } from 'quasar';

export default <QTableProps['columns']>[
  {
    name: 'id',
    label: 'ID',
    align: 'left',
    field: 'id',sortable: true,
  },
  {
    name: 'name',
    label: 'Имя',
    align: 'left',
    field: 'name',sortable: true,
  },
  {
    name: 'paymentAccount',
    align: 'left',
    label: 'Платежный аккаунт',sortable: true,
    field: 'paymentAccount',
  },
  {
    name: 'createdAt',
    label: 'Создан',
    align: 'left',sortable: true,
    field: 'createdAt',
    format: (val: string) =>
      `${new Date(val).toLocaleDateString()} ${new Date(val).toLocaleTimeString()}`,
  },
  {
    name: 'controls',
    align: 'right',
  },
];
