<script setup lang="ts">
  import { ref, computed } from 'vue';
  import CardMain from '@/components/CardMain.vue';
  import Card from '@/components/Card.vue';
  import draggable from 'vuedraggable';

  interface ICards {
    client: string
    type: string
    hour: string
  }
  const drag = ref<boolean>(false);

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

    <CardMain title="Consultas de amanhã">
      <template #body>
        <div>test</div>
      </template>
    </CardMain>
  </div>
</template>
