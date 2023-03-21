// import type { QuoteBuilderFormSchema } from '@quotebuilder/forms';

import { isModifierLike } from "typescript";

// export const futureStuff: QuoteBuilderSchema[] = [
//   type: 'form',
//   id: 'NBSSchemeScherveForm',
//   fields: QuoteBuilderFormSchema[],
//   props: {
//     validationVisibility: 'live',
//   },
//   triggers: {
//     fetchPrice: {
//       type: 'fetch',
//       url: 'https://api.example.com/price',
//       method: 'POST',
//       body: {
//         riskType: '$get(riskType).value',
//         inceptionDate: '$get(inceptionDate).value',
//       },
//     },
//   }
// ]

export const schemaFromBackend: QuoteBuilderFormSchema[] = [
  {
    component: 'heading',
    id: 'formtitle',
    props: {
      level: 2,
      text: 'Client Details'
    }
  },
  {
    component: 'date',
    id: 'inceptionDate',
    validation: ['required'],
    props: {
      label: 'Inception Date',
      type: 'date',
    }
  },
  {
    component: 'select',
    id: 'riskType',
    validation: ['required'],
    props: {
      label: 'Please advise the type of risk ?',
      options: [
        { value: "guesthouse", label: "Guesthouse" },
        { value: "hostel", label: "Hostel" },
        { value: "hotel", label: "Hotel" },
        { value: "wedding", label: "Wedding Event Venue" }
      ],
      // triggers: {
      //   onChange: "fetchPrice"
      // }
    }
  },
  {
    component: 'input',
    id: 'tradingName',
    // TODO: Decide with Ben.
    // This
    validation: [ // Required but can be empty array
      {
        rule: 'required',
        message: 'Please enter a trading name :)', //optional
      },
      {
        rule: 'min:5',
        message: 'Minimum 5 characters please', //optional
      },
    ],
    // Or this?
    validationTwo: ['required', 'min:5'],
    validationMessages: {
      required: 'Please enter a trading name :)',
      min: 'Minimum 5 characters please',
    },
    props: {
      label: 'Proposers name and trading name in full',
      type: 'text'
    }
  },
  {
    component: 'inputSelect',
    id: 'businessStatus',
    validation: ['required'],
    props: {
      label: 'What is the Business Status ?',
      options: [
        { value: "soleTrader", label: "Sole Trader" },
        { value: "partnership", label: "Partnership" },
        { value: "limitedCompany", label: "Limited Company" }
      ]
    }
  },
  {
    component: 'inputSelect',
    id: 'ernStatus',
    validation: ['required'],
    props: {
      label: 'Is the Client ERN exempt ?',
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
        { value: "Awaiting Certification from HMRC", label: "Awaiting Certification from HMRC" }
      ],
      hint: "UK businesses employing one or more people are required to have an ERN (Employer’s Reference Number, also commonly referred to as the ‘Employer PAYE Reference’), which is a unique reference number for your employees’ income tax and national insurance contributions. You will find your ERN printed or written on mandatory documents including the P45, P60, P11/D and on most payslips. It looks something like this: NNN/Aznnnnn (maybe with up to 7 digits)."
    }
  },
  {
    component: 'modal',
    id: 'modal',
    show_if: [ // this component shows if below conditions match
      {
        field: 'ernStatus',
        operator: 'equals',
        value: 'yes'
      },
      {
        field: 'inceptionDate', // Only businesses started in 2023 need ERN
        operator: 'greater_than_or_equals_to',
        value: '2023-01-01'
      },
    ]
  },
  {
    component: 'inputSelect',
    id: 'ernExemptReason',
    validation: ['required'],
    show_if: [
      {
        field: 'ernStatus',
        operator: 'equals',
        value: 'yes'
      },
    ],
    props: {
      label: 'Reason for being ERN Exempt:',
      options: [
        { value: "All employees earn less than PAYE threshold", label: "All employees earn less than PAYE threshold" },
        { value: "Business does not have any employees", label: "Business does not have any employees" },
        { value: "Business is registered in Jersey or Guernsey", label: "Business is registered in Jersey or Guernsey" }
      ]
    }
  },
  {
    component: 'input',
    id: 'ern',
    validation: ['required'],
    show_if: [
      {
        field: 'ernStatus',
        operator: 'equals',
        value: 'yes'
      },
    ],
    props: {
      label: 'Employers Reference Number',
      type: 'text'
    }
  },
  {
    component: 'inputRadio',
    id: 'notifyThirdParty',
    validation: ['required'],
    props: {
      label: 'Is there a Third Party Interest to be Noted?',
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
      ]
    }
  },
  {
    component: 'input',
    id: 'thirdPartyName',
    validation: 'required',
    show_if: [
      {
        field: 'notifyThirdParty',
        operator: 'equals',
        value: 'yes'
      },
    ],
    props: {
      label: 'Third Party Interest',
      type: 'text'
    }
  },
  {
    component: 'inputSelect',
    id: 'yearsCurrent',
    validation: ['required'],
    props: {
      label: 'Number of years trading at this address ?',
      options: [
        { value: "0", label: "0" },
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
        { value: "5+", label: "5+" }
      ]
    }
  },
  {
    component: 'inputSelect',
    id: 'yearsPrevious',
    validation: ['required'],
    props: {
      label: 'Number of years trading at a previous address ?',
      options: [
        { value: "0", labels: "0" },
        { value: "1", labels: "1" },
        { value: "2", labels: "2" },
        { value: "3", labels: "3" },
        { value: "4", labels: "4" },
        { value: "5", labels: "5" },
        { value: "5+", labels: "5+" }
      ]
    }
  },
  {
    component: 'group',
    id: "billing_address",
    children: [
      {
        component: 'input',
        id: 'line1',
        validation: 'required',
        props: {
          label: 'line 1',
          type: 'text'
        }
      },
      {
        component: 'input',
        id: 'line2',
        validation: '',
        props: {
          label: 'line 2',
          type: 'text'
        }
      },
    ]
  }
]

