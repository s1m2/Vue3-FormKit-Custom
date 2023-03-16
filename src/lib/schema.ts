export const schema = [
  {
    type: 'CFormFieldInput',
    name: "Anyting",
    id: "2313Thirdpartyinterest",
    label: "Third Party Interest",
    validation: "required",
    required: true
  },
  {
    type: 'CFormFieldSelect',
    depends_on: [{ questionId: 'Anyting', operator: ""}],
    name: "2313ERNexempt",
    id: "2313ERNexempt",
    label: "Is the Client ERN exempt?",
    info: "UK businesses employing one or more people are required to have an ERN (Employer’s Reference Number, also commonly referred to as the ‘Employer PAYE Reference’), which is a unique reference number for your employees’ income tax and national insurance contributions. You will find your ERN printed or written on mandatory documents including the P45, P60, P11/D and on most payslips. It looks something like this: NNN/Aznnnnn (maybe with up to 7 digits).",
    value: "Yes",
    options: [
      { value: "Yes", label: "Yes" }, 
      { value: "No", label: "No" }, 
      { value: "Awaiting Certification from HMRC", label: "Awaiting Certification from HMRC" }
    ]
  }
]