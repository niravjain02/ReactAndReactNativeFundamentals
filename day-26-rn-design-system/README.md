# Day 26: Styling & Design System

This Expo project builds a small Profile Dashboard with a reusable React Native design system. The form includes profile, contact, and settings sections with editable inputs plus save and cancel actions.

## Design System Overview

A design system is a shared collection of visual decisions and reusable interface components. Instead of choosing a new color, font size, or padding value every time a screen is built, the application uses named theme tokens and common components.

The Day 26 design system has two layers:

- **Theme tokens** define colors, spacing, and typography.
- **Reusable components** apply those tokens to buttons, cards, inputs, headings, and the profile summary.

## Project Structure

```text
day-26-rn-design-system/
├── src/
│   ├── components/
│   │   ├── AppButton.js
│   │   ├── AppCard.js
│   │   ├── AppTextInput.js
│   │   ├── ProfileCard.js
│   │   └── SectionHeader.js
│   ├── theme/
│   │   ├── colors.js
│   │   ├── spacing.js
│   │   ├── typography.js
│   │   └── index.js
│   ├── screens/
│   │   └── HomeScreen.js
│   └── constants/
│       └── sampleProfile.js
├── App.js
└── README.md
```

## Theme Structure

- `colors.js` contains semantic colors such as `background`, `surface`, `primary`, and `textMuted`.
- `spacing.js` provides one spacing scale from `xs` through `xxxl`.
- `typography.js` defines reusable text styles for titles, body text, labels, captions, and buttons.
- `index.js` exports all theme values from one location so components can import from `../theme`.

Centralized theme management makes broad visual changes predictable. For example, changing `colors.primary` updates every component that uses the primary brand color.

## Component Structure

- `AppButton` supports `primary` and `secondary` variants.
- `AppCard` provides a consistent surface, border, corner radius, and padding.
- `AppTextInput` combines a label with a consistently styled input.
- `SectionHeader` gives each form section a shared title and description style.
- `ProfileCard` composes `AppCard` with profile-specific content.

These components accept data and event handlers through props. A screen can reuse them without copying their internal styles.

## Why Design Systems Matter

Duplicated styles become difficult to maintain as a mobile application grows. Small differences in padding, colors, and font sizes also make the interface feel inconsistent.

A design system helps teams:

- create consistent screens faster;
- make visual changes in fewer places;
- reuse tested interaction patterns;
- give colors and spacing meaningful names;
- scale the application without copying large style objects.

## iOS Mapping

| React Native concept | iOS equivalent |
| --- | --- |
| Centralized color tokens | `UIColor` assets in an asset catalog |
| `colors`, `spacing`, and `typography` | Design tokens shared across the app |
| React Native reusable components | SwiftUI reusable `View` types |
| Shared component styles and variants | UIKit component libraries and configured `UIButton`, `UIView`, and `UITextField` subclasses |

In SwiftUI, a team might create reusable views such as `PrimaryButton` and `ProfileCard`. In UIKit, the same consistency can come from component subclasses, configuration helpers, and values stored in an asset catalog or token package.

## Run the App

```bash
cd day-26-rn-design-system
npm install
npx expo start
```

Then open the project in Expo Go, the iOS Simulator, an Android emulator, or a web browser.
