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
  },
  {
    name: 'price',
    align: 'left',
    label: 'Цена',
    field: 'price',
  },
  {
    name: 'date',
    align: 'left',
    label: 'Дата',
    field: 'date',
    format: (val: string) => `${new Date(val).toLocaleDateString()}`,
  },
  {
    name: 'openingPrice',
    align: 'left',
    label: 'Цена открытия',
    field: 'openingPrice',
  },
  {
    name: 'closePrice',
    align: 'left',
    label: 'Цена закрытия',
    field: 'closePrice',
  },
  {
    name: 'controls',
    align: 'right',
  },
];
