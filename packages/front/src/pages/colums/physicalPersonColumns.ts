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
    name: 'surname',
    align: 'left',
    label: 'Фамилия',
    field: 'surname',
    sortable: true,
  },
  {
    name: 'patronymic',
    align: 'left',
    label: 'Отчество',
    field: 'patronymic',
    format: (val: string) => val ?? '----------------',
    sortable: true,
  },
  {
    name: 'inn',
    label: 'ИНН',
    align: 'left',
    field: 'inn',
    sortable: true,
  },
  {
    name: 'controls',
    align: 'right',
  },
];
