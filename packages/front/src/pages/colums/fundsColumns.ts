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
    label: 'Название',
    align: 'left',
    field: 'name',
  },
  {
    name: 'createdAt',
    align: 'left',
    label: 'Создан',
    field: 'createdAt',
    format: (val: string) =>
      `${new Date(val).toLocaleDateString()} ${new Date(val).toLocaleTimeString()}`,
  },
  {
    name: 'fullname',
    align: 'left',
    label: 'Полное название',
    field: 'fullname',
  },
  {
    name: 'capitalization',
    align: 'left',
    label: 'Капитализация',
    field: 'capitalization',
  },
  {
    name: 'shortname',
    align: 'left',
    label: 'Сокр. название',
    field: 'shortname',
  },
  {
    name: 'controls',
    align: 'right',
  },
];
