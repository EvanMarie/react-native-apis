# React Native Expo Template

This is a feature-rich template for building React Native apps with Expo and TypeScript. It provides a solid foundation to help you hit the ground running on your next mobile app project.

## Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 30px; width: 100%; justify-content: space-evenly;">
<img src="https://www.evanmarie.com/content/files/images/react-native-template/native-template-1.webp" alt="react native template image 1" width="350"/>

<img src="https://www.evanmarie.com/content/files/images/react-native-template/native-template-2.webp" alt="react native template image 2" width="350"/>

<img src="https://www.evanmarie.com/content/files/images/react-native-template/native-template-3.webp" alt="react native template image 3" width="350"/>

<img src="https://www.evanmarie.com/content/files/images/react-native-template/native-template-4.webp" alt="react native template image 4" width="350"/>

<img src="https://www.evanmarie.com/content/files/images/react-native-template/native-template-5.webp" alt="react native template image 5" width="350"/>

<img src="https://www.evanmarie.com/content/files/images/react-native-template/native-template-6.webp" alt="react native template image 6" width="350"/>
</div>

## Features

- 11 built-in color gradients to easily style your app
- Well-organized color scheme setup
- A variety of pre-built custom components, including:
  - ActiveInactiveToggleButton
  - Alert
  - AnimatedImage
  - BottomSheet
  - BouncingDots
  - Button
  - Collapsible
  - ColorfulContainer
  - ComponentView
  - Containers
  - and many more! See `/app/custom-components` folder for full list.
- Hooks, iOS and Android specific code, scripts and more
- TypeScript support for improved developer experience and code quality

## Getting Started

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npx expo start` to launch the Expo development server
4. Follow the Expo prompts to launch the app on a device or simulator

## Color Scheme

This template organizes colors intuitively to streamline styling your app. It includes 11 pre-configured gradients that can easily be used on any component. See the `Colors.ts` file for the full list of available colors and gradients.

## Custom Components

I've built a library of reusable custom components to accelerate app development. Browse the `/app/custom-components` directory to see the available components. Import them into your screens and use them just like any other component.

## Project Structure

- `/app` - Main source code
  - `/assets` - Images, fonts and other static assets
  - `/custom-components` - Reusable custom components
  - `/constants` - Constants and configuration
  - `/screens` - App screen components
- `/hooks` - Custom React hooks
- `/ios` - iOS native code
- `/android` - Android native code

## Expo Commands

This template uses the latest version of Expo. Instead of `expo start`, use:

- `npx expo start` - Launch the Expo development server
- `npx expo <command>` - Run any other Expo command
