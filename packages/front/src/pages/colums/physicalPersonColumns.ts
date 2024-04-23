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
    name: 'surname',
    align: 'left',
    label: 'Фамилия',
    field: 'surname',
  },
  {
    name: 'patronymic',
    align: 'left',
    label: 'Отчество',
    field: 'patronymic',
    format: (val: string) => val ?? '----------------',
  },
  {
    name: 'inn',
    label: 'ИНН',
    align: 'left',
    field: 'inn',
  },
  {
    name: 'controls',
    align: 'right',
  },
];
