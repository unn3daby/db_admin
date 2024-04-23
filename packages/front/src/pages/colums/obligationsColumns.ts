import { QTableProps } from 'quasar';

export default <QTableProps['columns']>[
  {
    name: 'id',
    label: 'ID',
    align: 'left',
    field: 'id',
  },
  {
    name: 'payerId',
    label: 'ID плательщика',
    align: 'left',
    field: 'payerId',
    sortable: true,
  },
  {
    name: 'price',
    align: 'left',
    label: 'Цена',
    field: 'price',
    sortable: true,
  },
  {
    name: 'date',
    align: 'left',
    label: 'Дата',
    field: 'date',
    format: (val: string) => `${new Date(val).toLocaleDateString()}`,
    sortable: true,
  },
  {
    name: 'openingPrice',
    align: 'left',
    label: 'Цена открытия',
    field: 'openingPrice',
    sortable: true,
  },
  {
    name: 'closePrice',
    align: 'left',
    label: 'Цена закрытия',
    field: 'closePrice',
    sortable: true,
  },
  {
    name: 'controls',
    align: 'right',
  },
];
