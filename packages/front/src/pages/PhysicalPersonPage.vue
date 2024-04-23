<template>
  <q-page class="q-pa-md page-hack flex justify-center items-center">
    <q-table
      class="full-height vn"
      title="Физ. Лица"
      :loading="isLoading"
      :rows="filteredRows"
      :columns="columns"
      :rows-per-page-options="[0]"
      row-key="name"
    >
      <template #top-left>
        <div class="text-h5">Физ. Лица</div>
        <q-input
          style="width: 150px"
          v-model="search"
          class="q-ml-md"
          dense
          outlined
          label="Поиск по ID"
          clearable
        />
      </template>
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
      <template #top-right>
        <q-btn
          icon="mdi-plus"
          color="blue"
          @click="
            () => {
              (changeableRow = {
                name: '',
                surname: '',
                patronymic: '',
                inn: '',
              }),
                (isCreateOpened = true);
            }
          "
        ></q-btn>
      </template>
    </q-table>
    <q-dialog v-model="isCreateOpened">
      <q-card style="width: 400px">
        <q-card-section class="text-h5">Создание элемента</q-card-section>
        <q-card-section v-for="input in inputs" :key="input">
          <q-input
            :label="input"
            dense
            outlined
            v-model="newRow[input]"
          ></q-input>
        </q-card-section>
        <q-card-actions align="right" class="q-pa-md">
          <q-btn color="primary" @click="onCreate">Создать</q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
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
import columns from './colums/physicalPersonColumns';
import axios, { AxiosError } from 'axios';
import { useQuasar } from 'quasar';

const isDialogOpened = ref(false);
const isCreateOpened = ref(false);
const newRow: Ref<Record<string, string>> = ref({});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const changeableRow: Ref<Record<string, any>> = ref({} as Record<string, any>);

const inputs = computed(() => {
  const inputsArray = [];
  if (changeableRow.value) {
    for (let key in changeableRow.value) {
      if (key !== 'id' && key !== 'createdAt') {
        inputsArray.push(key);
      }
    }
  }
  return inputsArray;
});

const rows: Ref<Array<Record<string, string | number>>> = ref([]);
const search = ref('');
const isLoading = ref(false);
const $q = useQuasar();

const filteredRows = computed(() => {
  if (search.value)
    // eslint-disable-next-line
    return rows.value.filter((item) => String(item.id).includes(search.value));
  return rows.value;
});

const onCreate = async () => {
  try {
    isLoading.value = true;
    console.log(changeableRow);
    const {
      data: { message },
    } = await axios.post(
      'http://localhost:8001/api/physicalPerson',
      newRow.value,
    );
    $q.notify({ type: 'positive', message: message });
    isCreateOpened.value = false;
    await getData();
    changeableRow.value = {};
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError)
      $q.notify({
        type: 'negative',
        message:
          error.response?.data?.data?.meta?.cause ??
          error.response?.data.message,
      });
  } finally {
    isLoading.value = false;
  }
};
const onUpdate = async (id: number) => {
  try {
    isLoading.value = true;
    console.log(changeableRow);
    const {
      data: { message },
    } = await axios.put(
      `http://localhost:8001/api/physicalPerson/${id}`,
      changeableRow.value,
    );
    $q.notify({ type: 'positive', message: message });
    isDialogOpened.value = false;
    await getData();
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError)
      $q.notify({
        type: 'negative',
        message:
          error.response?.data.data.meta.cause ?? error.response?.data.message,
      });
  } finally {
    isLoading.value = false;
  }
};

const onDelete = async (id: number) => {
  try {
    isLoading.value = true;
    const {
      data: { message },
    } = await axios.delete(`http://localhost:8001/api/physicalPerson/${id}`);
    $q.notify({ type: 'positive', message: message });
    await getData();
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError)
      $q.notify({
        type: 'negative',
        message:
          error.response?.data.data.meta.cause ?? error.response?.data.message,
      });
  } finally {
    isLoading.value = false;
  }
};

const getData = async () => {
  try {
    rows.value = [];
    const {
      data: { data, message },
    } = await axios.get('http://localhost:8001/api/physicalPerson');
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
  width: 800px;
}
</style>
