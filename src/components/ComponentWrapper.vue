<script setup lang="ts">
import  { computed, defineAsyncComponent } from 'vue';
import type { FormKitFrameworkContext } from '@formkit/core';

const BaseInput = defineAsyncComponent(() => import('./BaseInput.vue'));
const BaseRadio = defineAsyncComponent(() => import('./BaseRadio.vue'));
const BaseCheckBox = defineAsyncComponent(() => import('./BaseCheckBox.vue'));
const BaseSelect = defineAsyncComponent(() => import('./BaseSelect.vue'));
const Heading = defineAsyncComponent(() => import('./AppHeading.vue'))
const Modal = defineAsyncComponent(() => import('./AppModal.vue'))

const components = {
  heading: Heading,
  modal: Modal,
  input: BaseInput,
  inputRadio: BaseRadio,
  inputCheckBox: BaseCheckBox,
  inputSelect: BaseSelect
}
 
const componentType = computed(() => components[props.context.type as keyof typeof components])

const props = defineProps<{
  context: FormKitFrameworkContext
}>()

const attributes = computed(() => {
  return { id: props.context.id, ...props.context.attrs.props}
})

const inputValue = computed({
  get () {
    return props.context._value || ""
  },
  set (value) {
    props?.context?.node.input(value)
    props?.context?.handlers.blur
  }
})
</script>

<template>
  <component :is="componentType" v-bind="attributes" v-model="inputValue" />
</template>