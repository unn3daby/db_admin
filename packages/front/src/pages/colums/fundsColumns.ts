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
    label: 'Название',
    align: 'left',sortable: true,
    field: 'name',
  },
  {
    name: 'createdAt',
    align: 'left',
    label: 'Создан',
    field: 'createdAt',sortable: true,
    format: (val: string) =>
      `${new Date(val).toLocaleDateString()} ${new Date(val).toLocaleTimeString()}`,
  },
  {
    name: 'fullname',
    align: 'left',
    label: 'Полное название',
    field: 'fullname',sortable: true,
  },
  {
    name: 'capitalization',
    align: 'left',
    label: 'Капитализация',
    field: 'capitalization',sortable: true,
  },
  {
    name: 'shortname',
    align: 'left',
    label: 'Сокр. название',
    field: 'shortname',sortable: true,
  },
  {
    name: 'controls',
    align: 'right',
  },
];
