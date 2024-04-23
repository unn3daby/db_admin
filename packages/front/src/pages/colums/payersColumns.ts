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
    name: 'status',
    align: 'left',
    label: 'Статус',
    field: 'status',
  },
  {
    name: 'controls',
    align: 'center',
  },
];
