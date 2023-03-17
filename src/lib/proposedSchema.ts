export const schema = [
  {
    type: 'CFormFieldInput',
    name: "anyting",
    id: "anything",
    label: "Third Party Interest",
    validation: "required",
    required: true
  },
  {
    type: 'CFormFieldSelect',
    depends_on: [{ id: 'anyting', operator: "equals", value: true}],
    name: "2313ERNexempt",
    id: "2313ERNexempt",
    label: "Is the Client ERN exempt?",
    options: [
      { value: "Yes", label: "Yes" }, 
      { value: "No", label: "No" }, 
      { value: "Awaiting Certification from HMRC", label: "Awaiting Certification from HMRC" }
    ]
  }
]

export const schema_1 = [
  {
    type: 'CFormFieldInput',
    name: "anyting",
    id: "anything",
    label: "Third Party Interest",
    validation: "required",
    required: true
  },
  {
    type: 'CFormFieldSelect',
    if: '$get(anything).value',
    name: "2313ERNexempt",
    id: "2313ERNexempt",
    label: "Is the Client ERN exempt?",
    options: [
      { value: "Yes", label: "Yes" }, 
      { value: "No", label: "No" }, 
      { value: "Awaiting Certification from HMRC", label: "Awaiting Certification from HMRC" }
    ]
  }
]

export const schema_2 = [
  {
    type: 'CFormFieldInput',
    name: "Anyting",
    id: "Anything",
    label: "Third Party Interest",
    validation: "required",
    required: true
  },
  {
    type: 'CFormFieldSelect',
    if: [{ object: 'anything', equals: true}],
    name: "2313ERNexempt",
    id: "2313ERNexempt",
    label: "Is the Client ERN exempt?",
    options: [
      { value: "Yes", label: "Yes" }, 
      { value: "No", label: "No" }, 
      { value: "Awaiting Certification from HMRC", label: "Awaiting Certification from HMRC" }
    ]
  }
]

export const schema_3 = [
  {
    type: 'CFormFieldInput',
    name: "Anyting",
    id: "Anything",
    label: "Third Party Interest",
    validation: "required",
    required: true
  },
  {
    type: 'CFormFieldSelect',
    show_if: 'anything',
    name: "2313ERNexempt",
    id: "2313ERNexempt",
    label: "Is the Client ERN exempt?",
    options: [
      { value: "Yes", label: "Yes" }, 
      { value: "No", label: "No" }, 
      { value: "Awaiting Certification from HMRC", label: "Awaiting Certification from HMRC" }
    ]
  }
]

export const schema_4 = [
  {
    type: 'CFormFieldInput',
    name: "Anyting",
    id: "Anything",
    label: "Third Party Interest",
    validation: "required",
    required: true
  },
  {
    type: 'CFormFieldSelect',
    condition: 'anything=true',
    name: "2313ERNexempt",
    id: "2313ERNexempt",
    label: "Is the Client ERN exempt?",
    options: [
      { value: "Yes", label: "Yes" }, 
      { value: "No", label: "No" }, 
      { value: "Awaiting Certification from HMRC", label: "Awaiting Certification from HMRC" }
    ]
  }
]