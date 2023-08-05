<script setup lang="ts">
  import { ref, computed } from 'vue'
  import CardMain from '@/components/CardMain.vue'
  import Card from '@/components/Card.vue'
  import Modal from '@/components/Modal.vue'
  import Input from '@/components/Input.vue'
  import Button from '@/components/Button.vue'
  import draggable from 'vuedraggable'

  interface ICards {
    client: string
    type: string
    hour: string
  };

  const modalRegisterPatient = ref<boolean>(false);
  const drag = ref<boolean>(false);

  function saveRegister() {
    
  }

  const dragOptions = computed(() => {
    return {
      animation: 200,
      group: 'description',
      disabled: false,
      ghostClass: 'ghost',
    }
  });

  const cards = ref<ICards[]>([
    { client: 'Renato Carlos', type: 'dieta', hour: '09:00' },
    { client: 'João Brito', type: 'renal', hour: '10:00' },
    { client: 'Jose Brito', type: 'diabetico', hour: '11:00' },
    { client: 'João Walter', type: 'atleta', hour: '12:00' },
    { client: 'Marcos Prado', type: 'atleta', hour: '14:00' },
    { client: 'Wagner Lacerda', type: 'dieta', hour: '13:00' },
    { client: 'Eduardo João', type: 'dieta', hour: '14:00' },
  ]);

  const cards2 = ref<ICards[]>([
    { client: 'Newton', type: 'dieta', hour: '09:00' },
  ]);
</script>

<template>
  <div class="flex gap-4">
    <CardMain title="Consultas de hoje">
      <template #body>
        <draggable
          class="list-group"
          tag="transition-group"
          :component-data="{
            tag: 'ul',
            type: 'transition-group',
            name: !drag ? 'flip-list' : null,
          }"
          v-model="cards"
          v-bind="dragOptions"
          @start="drag = true"
          @end="drag = false"
          item-key="order"
        >
          <template #item="{ element }">
            <li class="list-group-item">
              <i
                :class="
                  element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
                "
                @click="element.fixed = !element.fixed"
                aria-hidden="true"
              ></i>
              <Card
                :client="element.client"
                :type="element.type"
                :hour="element.hour"
              />
            </li>
          </template>
        </draggable>
      </template>
    </CardMain>

    <CardMain title="Consultas de amanhã">
      <template #body>
        <draggable
          class="list-group"
          tag="transition-group"
          :component-data="{
            tag: 'ul',
            type: 'transition-group',
            name: !drag ? 'flip-list' : null,
          }"
          v-model="cards2"
          v-bind="dragOptions"
          @start="drag = true"
          @end="drag = false"
          item-key="order"
        >
          <template #item="{ element }">
            <li class="list-group-item">
              <i
                :class="
                  element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
                "
                @click="element.fixed = !element.fixed"
                aria-hidden="true"
              ></i>
              <Card
                :client="element.client"
                :type="element.type"
                :hour="element.hour"
              />
            </li>
          </template>
        </draggable>
      </template>
    </CardMain>

    <CardMain class="h-[150px]" title="Cadastro paciênte">
      <template #body>
        <div class="card flex-col justify-center">
          <h3 class="text-sm font-semibold text-center px-4">
            Cadastre agora o paciente de forma rápida.
          </h3>
          <Button
            color="primary"
            class="mx-auto my-2"
            @click="modalRegisterPatient = true"
          >
            <i class="pi pi-user" />
            Cadastrar
          </Button>
        </div>
      </template>
    </CardMain>

    <Modal v-if="modalRegisterPatient">
      <tempalte>
        <form class="flex flex-col p-4" @submit.prevent="saveRegister">
          <Input type="text" label="Nome" placeholder="Laura Carla Brito" />

          <Input
            type="email"
            label="E-mail"
            placeholder="lauracarla@gmail.com"
          />

          <Input type="number" label="Numero" placeholder="(75) 3281-4022" />

          <div class="flex gap-4">
            <Input type="number" label="Idade" placeholder="14" />
            <Input type="number" label="Peso" placeholder="77,14" />
          </div>

          <div class="flex gap-4">
            <Input type="number" label="Altura" placeholder="1,90" />
            <Input type="number" label="Pressão arterial" placeholder="12,80" />
          </div>

          <Button
            color="primary"
            class="w-full my-4"
            type="submit"
          >
            <i class="pi pi-save" />
            Registar
          </Button>

          <Button class="w-full hover:text-primary" @click="modalRegisterPatient = false">
            <i class="pi pi-times" />
            Cancel
          </Button>
        </form>
      </tempalte>
    </Modal>
  </div>
</template>
