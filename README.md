# React-iOS-PWA-prompt

[![npm version](http://img.shields.io/npm/v/react-ios-pwa-prompt.svg?style=flat)](https://npmjs.org/package/react-ios-pwa-prompt "View this project on npm") ![Gzip file size](https://img.badgesize.io/chrisdancee/react-ios-pwa-prompt/master/dist/react-ios-pwa-prompt.js?compression=gzip)

> Polyfilling PWAs for iOS

A React component that provides a customisable Progressive Web App (PWA) prompt telling the user to 'Add to Home Screen'. The prompt behaviour is baked in to Android devices, yet iOS is still lagging behind. This component aims to provide a simple way to provide this functionality on iOS for websites that are PWA-ready. The prompt styles closely match iOS designs for both light and dark UI modes to appear native to the user.

<hr>

<img src="https://user-images.githubusercontent.com/11626619/65389000-18352d00-dd49-11e9-82c8-6fac25a494c8.gif" width="33%">

<hr>

## Features

- 🛠 Fully configurable, set how many times you want to see it, and after how many page visits.
- 📃 PWA available offline? In full screen mode? Customise the content of your prompts message through props.
- ⚡️ Efficient. Very little overhead for non-iOS devices and does as little work as needed for each page load.
- 📱 Detects user's iOS version to provide the correct icon set.
- 🌕 Will display a dark mode if enabled on iOS 13.

## Usage

1. Add `react-ios-pwa-prompt` as a dependency using `yarn add react-ios-pwa-prompt`.

2. Import into your project:

```
import PWAPrompt from 'react-ios-pwa-prompt'
```

3. Render the component:

```
<PWAPrompt />
```

4. Add optional props to configure:

- `timesToShow`: pass an integer to configure how many times to show the prompt, will default to 1
- `promptOnVisit`: pass an integer for the when to start showing the prompt, will default to 1 (the first page visit)
- `delay`: pass an integer in ms to add a delay to the prompt
- `title`: pass a string to customise the title of the prompt
- `copy`: pass a string to customise the body of the prompt

```
<PWAPrompt promptOnVisit={1} timesToShow={3}>
```

## Examples:

iOS 12:

<img src="https://user-images.githubusercontent.com/11626619/65392822-c902f280-dd70-11e9-8f81-a5099ca38d7f.png" width="312px">

iOS 13 Light:

<img src="https://user-images.githubusercontent.com/11626619/65392823-c902f280-dd70-11e9-9b9c-e782ec4e2721.png" width="312px">

iOS 13 Dark:

<img src="https://user-images.githubusercontent.com/11626619/65392824-c902f280-dd70-11e9-95c7-e58af3d1e71a.png" width="312px">
