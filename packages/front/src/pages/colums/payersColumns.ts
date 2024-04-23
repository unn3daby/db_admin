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
    name: 'name',
    label: 'Имя',
    align: 'left',
    field: 'name',
    sortable: true,
  },
  {
    name: 'status',
    align: 'left',
    label: 'Статус',
    field: 'status',
    sortable: true,
  },
  {
    name: 'controls',
    align: 'center',
  },
];
