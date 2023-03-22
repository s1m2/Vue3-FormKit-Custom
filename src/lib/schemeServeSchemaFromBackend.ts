import type { QuoteBuilderFormSchema } from './types';

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
    component: 'inputDate',
    id: 'inceptionDate',
    validation: [
      { rule: 'required' }
    ],
    props: {
      label: 'Inception Date',
    }
  },
  {
    component: 'inputSelect',
    id: 'riskType',
    validation: [
      { rule: 'required' }
    ],
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
    component: 'inputText',
    id: 'tradingName',
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
    props: {
      label: 'Proposers name and trading name in full',
    }
  },
  {
    component: 'inputSelect',
    id: 'businessStatus',
    validation: [
      { rule: 'required' }
    ],
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
    validation: [
      { rule: 'required' }
    ],
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
    props: [],
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
    validation: [
      { rule: 'required' }
    ],
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
    validation: [
      { rule: 'required' }
    ],
    show_if: [
      {
        field: 'ernStatus',
        operator: 'equals',
        value: 'yes'
      },
    ],
    props: {
      label: 'Employers Reference Number',
    }
  },
  {
    component: 'inputRadio',
    id: 'notifyThirdParty',
    validation: [
      { rule: 'required' }
    ],
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
    validation: [
      { rule: 'required' }
    ],
    show_if: [
      {
        field: 'notifyThirdParty',
        operator: 'equals',
        value: 'yes'
      },
    ],
    props: {
      label: 'Third Party Interest',
    }
  },
  {
    component: 'inputSelect',
    id: 'yearsCurrent',
    validation: [
      { rule: 'required' }
    ],
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
    validation: [
      { rule: 'required' }
    ],
    props: {
      label: 'Number of years trading at a previous address ?',
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
    component: 'group',
    id: "billing_address",
    children: [
      {
        component: 'inputText',
        id: 'line1',
        validation: [
          { rule: 'required' }
        ],
        props: {
          label: 'line 1',
        }
      },
      {
        component: 'inputText',
        id: 'line2',
        validation: [
          { rule: 'required' }
        ],
        props: {
          label: 'line 2',
        }
      },
    ]
  }
]

