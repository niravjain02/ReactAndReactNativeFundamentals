# Day 18: React Native Forms & Validation

This day builds a profile form with controlled inputs, validation state, inline errors, submit behavior, and reset behavior.

## Concepts Covered

- Expo blank app
- Controlled `TextInput` fields
- Reusable `FormInput` component
- Validation state
- Inline validation errors
- Submit flow
- Reset flow
- Rendering submitted data after a successful submit

## Form Fields

- Name
- Email
- Role
- Years of experience

## Validation Rules

- Name is required.
- Email is required and must look like an email.
- Role is required.
- Years of experience is required and must be a non-negative number.

## How the App Works

Controlled inputs:

The form values live in React state. Each `TextInput` receives a `value` and updates that value through `onChangeText`.

Validation state:

Validation errors also live in React state. When the user submits the form, `validateProfile` returns an error object. Each `FormInput` receives its own error message and displays it under the field.

Submit flow:

1. The user taps Submit.
2. `App.js` validates the current form values.
3. If errors exist, inline messages appear.
4. If the form is valid, the submitted profile is shown below the form.

Reset flow:

1. The user taps Reset.
2. Form values return to empty strings.
3. Validation errors are cleared.
4. The submitted profile is removed.

## Project Structure

```text
day-18-rn-forms-validation/
├── App.js
├── app.json
├── assets/
├── components/
│   ├── FormInput.js
│   ├── ProfileForm.js
│   └── SubmittedProfile.js
├── utils/
│   └── validation.js
├── index.js
├── package.json
└── README.md
```

## How to Run

```bash
cd day-18-rn-forms-validation
npm install
npx expo start
```

Use Expo Go on a device, or press `i` or `a` in the Expo terminal to launch an available simulator or emulator.
