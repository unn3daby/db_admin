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
    label: 'Имя',
    align: 'left',
    field: 'name',
  },
  {
    name: 'paymentAccount',
    align: 'left',
    label: 'Платежный аккаунт',
    field: 'paymentAccount',
  },
  {
    name: 'createdAt',
    label: 'Создан',
    align: 'left',
    field: 'createdAt',
  },
  {
    name: 'controls',
    align: 'right',
  },
];
