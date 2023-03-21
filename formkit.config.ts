import { defaultConfig } from '@formkit/vue';
import { createInput } from '@formkit/vue';
import ComponentWrapper from './src/components/ComponentWrapper.vue';

const customComponent = createInput(ComponentWrapper)

export const config = defaultConfig({
  inputs: {
    modal: customComponent,
    input: customComponent,
    inputSelect: customComponent,
    inputRadio: customComponent,
    inputCheckBox: customComponent
  }
}) 