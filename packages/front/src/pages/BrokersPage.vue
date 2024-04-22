<template>
  <q-page class="q-pa-md page-hack flex justify-center items-center">
    <q-table
      class="full-height vn"
      title="Брокеры"
      :loading="isLoading"
      :rows="rows"
      :columns="columns"
      row-key="name"
    >
      <template #body-cell-controls="props">
        <q-td :props="props">
          <q-btn
            flat
            icon="mdi-pencil"
            class="q-mr-md"
            @click="
              changeableRow = props.row;
              isDialogOpened = true;
            "
          >
          </q-btn>
          <q-btn flat icon="mdi-delete" @click="onDelete(props.row.id)"></q-btn
        ></q-td>
      </template>
    </q-table>
    <q-dialog v-model="isDialogOpened">
      <q-card style="width: 400px">
        <q-card-section class="text-h5">Изменение элемента</q-card-section>
        <q-card-section v-for="input in inputs" :key="input">
          <q-input
            :label="input"
            dense
            outlined
            v-model="changeableRow[input]"
          ></q-input>
        </q-card-section>
        <q-card-actions align="right" class="q-pa-md">
          <q-btn color="primary" @click="onUpdate(changeableRow.id)"
            >Изменить</q-btn
          >
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts" setup>
import { Ref, computed, onMounted, ref } from 'vue';
import columns from './colums/BrokersColums';
import axios from 'axios';
import { useQuasar } from 'quasar';

const isDialogOpened = ref(false);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const changeableRow: Ref<Record<string, any>> = ref({} as Record<string, any>);

const inputs = computed(() => {
  const inputsArray = [];
  if (changeableRow.value) {
    for (let key in changeableRow.value) {
      if (key !== 'id') {
        inputsArray.push(key);
      }
    }
  }
  return inputsArray;
});

const rows = ref([]);
const isLoading = ref(false);
const $q = useQuasar();

const onUpdate = async (id: number) => {
  isLoading.value = true;
  console.log(changeableRow);
  const {
    data: { message },
  } = await axios.put(
    `http://localhost:8001/api/broker/${id}`,
    changeableRow.value,
  );
  $q.notify({ type: 'positive', message: message });
  await getData();
  isDialogOpened.value = false;
  isLoading.value = false;
};

const onDelete = async (id: number) => {
  isLoading.value = true;
  const {
    data: { message },
  } = await axios.delete(`http://localhost:8001/api/broker/${id}`);
  $q.notify({ type: 'positive', message: message });
  await getData();
  isLoading.value = false;
};

const getData = async () => {
  try {
    rows.value = [];
    const {
      data: { data, message },
    } = await axios.get('http://localhost:8001/api/broker');
    rows.value = data;
    return message;
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  isLoading.value = true;
  const message = await getData();
  $q.notify({ type: 'positive', message: message });
  isLoading.value = false;
});
</script>
<style lang="scss">
.vn {
  width: 1000px;
}
</style>
