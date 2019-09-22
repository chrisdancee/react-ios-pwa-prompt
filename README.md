# React-iOS-PWA-prompt

> Polyfilling PWA prompts for iOS

A React component that provides a customisable Progressive Web App (PWA) prompt, matching native iOS <=12 or 13 styles for both light and dark UI modes. This behaviour is inherent on Android devices, yet does not happen on iOS. This component aims to provide a simple way to provide this functionality for websites that are PWA-ready.

<hr>

<img src="https://user-images.githubusercontent.com/11626619/65389000-18352d00-dd49-11e9-82c8-6fac25a494c8.gif" width="33%">

<hr>

## Features

- 🛠 Customisable delay, title and content.
- ☎️ Uses LocalStorage to only notify the user once.
- 📱 Detects user's iOS version and UI color scheme to provide native looking prompt

## Usage

Add `react-ios-pwa-prompt` as a dependency using `yarn add react-ios-pwa-prompt`.

Import into your project:

```
import PWAPrompt from 'react-ios-pwa-prompt'
```

Use the component:

```
<PWAPrompt />
```

There are also optional props that you can pass to the component:

- `delay` pass an integer in ms to add a delay to the prompt
- `title` pass a string to customise the title of the prompt
- `copy` pass a string to customise the body of the prompt

## Examples:

iOS 12:

<img src="https://user-images.githubusercontent.com/11626619/65392822-c902f280-dd70-11e9-8f81-a5099ca38d7f.png" width="312px">

iOS 13 Light:

<img src="https://user-images.githubusercontent.com/11626619/65392823-c902f280-dd70-11e9-9b9c-e782ec4e2721.png" width="312px">

iOS 13 Dark:

<img src="https://user-images.githubusercontent.com/11626619/65392824-c902f280-dd70-11e9-95c7-e58af3d1e71a.png" width="312px">
