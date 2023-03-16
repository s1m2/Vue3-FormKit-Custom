<script setup lang="ts">
import { ref } from 'vue';
// import { getNode } from '@formkit/core'
import { FormKitSchema, submitForm } from '@formkit/vue';

const form = ref()

const data = ref({
  reason: "fiodkgbjl;kfjmbg;fd"
});

// onMounted(() => {
//   /** Another way of setting a value */
//   const node = getNode('question');
//   node?.input('The government is being a pain the wrong place', false);
// })

const schema = [
  {
    $formkit: 'inputText',
    name: 'reason',
    label: 'Bens label',
    id: 'question',
    title: 'What is the reason for getting a new car ?',
    validation: 'required',
    validationVisibility: 'dirty',
    validationMessages: {
      required: 'This field is required for some apparent reason'
    }
  },
  {
    $formkit: 'inputRadio',
    name: 'gearbox',
    id: 'gearbox',
    title: 'Select your preferred gearbox ?',
    options: [{ value: 'auto', name: 'Automatic' }, { value: 'manual', name: 'Manual' }],
    validation: 'required'
  },
  {
    $formkit: 'inputSelect',
    name: 'make',
    id: 'make',
    title: 'Select your preferred manufacturer ?',
    options: [{ value: 'audi', name: 'Audi' }, { value: 'bmw', name: 'BMW' }, { value: 'mercedes', name: 'Mercedes' }],
    validation: 'required'
  },
  {
    $formkit: 'inputSelect',
    if: [{ object: 'make' }],
    name: 'model',
    id: 'model',
    title: 'Select your preferred model ?',
    options: {
      if: '$get(make).value === audi',
      then: [{ value: 'A4', name: 'A4' }, { value: 'A6', name: 'A6' }],
      else: {
        if: '$get(make).value === bmw',
        then: [{ value: '3 series', name: '3 series' }, { value: '5 series', name: '5 series' }],
        else: [{ value: 'C class', name: 'C Klasse' }, { value: 'E class', name: 'E Klasse' }]
      }
    }
  },
  {
    $formkit: 'inputCheckBox',
    if: [{ object: 'model', equals: 'A6' }],
    if: '$get(model).value === A6',
    name: 'engine',
    id: 'engine',
    title: 'Select the supercharged engine ?',
    options: [{ id: 'Supercharged', name: 'Supercharged' }],
    validation: 'required'
  },
]

function validateForm() {
  // const node = form.value.node
  // console.log(node)
  submitForm('car-stuff')
}

</script>

<template>
  <header>
    <p>Vue 3 FormKit Trial</p>
  </header>

  <main>
    <FormKit ref="form" id="car-stuff" type="form" v-model="data" :actions="false">
      <FormKitSchema :schema="schema" />
    </FormKit>

    <button @click="validateForm">Validate Form</button>
    <pre wrap>{{ data }}</pre>
  </main>
</template>

<style scoped></style>
