<script setup lang="ts">
import { ref, computed } from 'vue';
import { FormKitSchema, submitForm } from '@formkit/vue';
import type { FormKitFrameworkContext } from '@formkit/core';
import { schema } from "@/lib/schemeServeSchema";

const data = ref({});
const form = ref<FormKitFrameworkContext>();
const isValid = computed(() => form.value?.node.context?.state.valid);
const submitted = computed(() => form.value?.node.context?.state.submitted);

function submitPageData(data: any) {
  // // retrieve the core node (several ways to do this):
  // const node = form.value.node
  // // submit the form!
  // node.submit()

  const copy = structuredClone(schema);

  const updateData = copy.map((question: any) => {
    const answer = data[question?.id] ?? ""
    return {...question, answer}
  })

  console.log(updateData)
  console.log(data)
}

function submitHandler() {
  submitForm('car-stuff')
}


</script>

<template>
  <main>
    <!-- <template v-for="(schema, index) in multipleSchemas" :key="index">
      <FormKit ref="form" :id="`car-stuff-${index}`" type="form" v-model="data" :actions="false"
        @submit="submitPageData(index)">
        <FormKitSchema :schema="schema" />
      </FormKit>

      <button @click="submitHandler(index)">Validate Form</button>
    </template> -->

    <FormKit ref="form" id="car-stuff" type="form" v-model="data" :actions="false" @submit="submitPageData">
      <FormKitSchema :schema="schema" />
    </FormKit>

    <!-- <FormKitSchema ref="form" :schema="schema" /> -->

    <button @click="submitHandler">Validate Form</button>
    <pre wrap>{{ data }}</pre>
  </main>
</template>

<style scoped>
</style>
