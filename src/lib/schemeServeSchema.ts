import type { FormKitSchemaNode } from '@formkit/core';

export const schema: FormKitSchemaNode[] = [
  {
    $el: 'h2',
    children: ["Client Details"]
  },
  {
    $formkit: 'alert',
    name: 'alert',
    id: 'alert',
    if: "$get(ernStatus).value === yes"
  },
  {
    $formkit: 'input',
    name: 'inceptionDate',
    id: 'inceptionDate',
    validation: 'required',
    validationVisibility: 'dirty',
    props: {
      label: 'Inception Date',
      type: 'date'
    }
  },
  {
    $formkit: 'inputSelect',
    name: 'riskType',
    id: 'riskType',
    validation: 'required',
    validationVisibility: 'dirty',
    props: {
      label: 'Please advise the type of risk ?',
      options: [
        { value: "guesthouse", name: "Guesthouse" }, 
        { value: "hostel", name: "Hostel" }, 
        { value: "hotel", name: "Hotel" }, 
        { value: "wedding", name: "Wedding Event Venue" }
      ]
    }
  },
  {
    $formkit: 'input',
    name: 'tradingName',
    id: 'tradingName',
    validation: 'required',
    validationVisibility: 'dirty',
    props: {
      label: 'Proposers name and trading name in full',
      type: 'text'
    }
  },
  {
    $formkit: 'inputSelect',
    name: 'businessStatus',
    id: 'businessStatus',
    validation: 'required',
    validationVisibility: 'dirty',
    props: {
      label: 'What is the Business Status ?',
      options: [
        { value: "soleTrader", name: "Sole Trader" }, 
        { value: "partnership", name: "Partnership" }, 
        { value: "limitedCompany", name: "Limited Company" }
      ]
    }
  },
  {
    $formkit: 'inputSelect',
    name: 'ernStatus',
    id: 'ernStatus',
    validation: 'required',
    validationVisibility: 'dirty',
    props: {
      label: 'Is the Client ERN exempt ?',
      options: [
        { value: "yes", name: "Yes" }, 
        { value: "no", name: "No" }, 
        { value: "Awaiting Certification from HMRC", name: "Awaiting Certification from HMRC" }
      ],
      help: "UK businesses employing one or more people are required to have an ERN (Employer’s Reference Number, also commonly referred to as the ‘Employer PAYE Reference’), which is a unique reference number for your employees’ income tax and national insurance contributions. You will find your ERN printed or written on mandatory documents including the P45, P60, P11/D and on most payslips. It looks something like this: NNN/Aznnnnn (maybe with up to 7 digits)."
    }
  },
  {
    $formkit: 'inputSelect',
    if: "$get(ernStatus).value === yes",
    name: 'ernExemptReason',
    id: 'ernExemptReason',
    validation: 'required',
    validationVisibility: 'dirty',
    props: {
      label: 'Reason for being ERN Exempt:',
      options: [
        { value: "All employees earn less than PAYE threshold", name: "All employees earn less than PAYE threshold" }, 
        { value: "Business does not have any employees", name: "Business does not have any employees" }, 
        { value: "Business is registered in Jersey or Guernsey", name: "Business is registered in Jersey or Guernsey" }
      ]
    }
  },
  {
    $formkit: 'input',
    if: "$get(ernStatus).value === no",
    name: 'ern',
    id: 'ern',
    validation: 'required',
    validationVisibility: 'dirty',
    props: {
      label: 'Employers Reference Number',
      type: 'text'
    }
  },
  {
    $formkit: 'inputRadio',
    name: 'notifyThirdParty',
    id: 'notifyThirdParty',
    validation: 'required',
    validationVisibility: 'dirty',
    props: {
      label: 'Is there a Third Party Interest to be Noted?',
      options: [
        { value: "yes", name: "Yes" }, 
        { value: "no", name: "No" }
      ]
    }
  },
  {
    $formkit: 'input',
    if: "$get(notifyThirdParty).value === yes",
    name: 'thirdPartyName',
    id: 'thirdPartyName',
    validation: 'required',
    validationVisibility: 'dirty',
    props: {
      label: 'Third Party Interest',
      type: 'text'
    }
  },
  {
    $formkit: 'inputSelect',
    name: 'yearsCurrent',
    id: 'yearsCurrent',
    validation: 'required',
    validationVisibility: 'dirty',
    props: {
      label: 'Number of years trading at this address ?',
      options: [
        { value: "0", name: "0" }, 
        { value: "1", name: "1" }, 
        { value: "2", name: "2" },
        { value: "3", name: "3" },
        { value: "4", name: "4" },
        { value: "5", name: "5" },
        { value: "5+", name: "5+" }
      ]
    }
  },
  {
    $formkit: 'inputSelect',
    name: 'yearsPrevious',
    id: 'yearsPrevious',
    validation: 'required',
    validationVisibility: 'dirty',
    props: {
      label: 'Number of years trading at a previous address ?',
      options: [
        { value: "0", name: "0" }, 
        { value: "1", name: "1" }, 
        { value: "2", name: "2" },
        { value: "3", name: "3" },
        { value: "4", name: "4" },
        { value: "5", name: "5" },
        { value: "5+", name: "5+" }
      ]
    }
  }
]

