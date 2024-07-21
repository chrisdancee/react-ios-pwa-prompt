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
- 🌕 Light & dark mode available depending on user's settings.

## Usage

1. Add `react-ios-pwa-prompt` as a dependency using `pnpm add react-ios-pwa-prompt`.

2. Import into your project:

```
import PWAPrompt from 'react-ios-pwa-prompt'
```

3. Render the component:

```
<PWAPrompt />
```

4. Add optional props to configure:

| Prop                    | Description                                            | Default Value                                                                                             |
| ----------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| timesToShow             | Number of consecutive visits to show the prompt        | 2                                                                                                         |
| promptOnVisit           | On which visit should the first prompt be shown?       | 2                                                                                                         |
| delay                   | Pass an integer in ms to add a delay to the prompt     | 1000                                                                                                      |
| onClose                 | Callback function for once the prompt is dismisseed    | () => undefined                                                                                           |
| copyTitle               | The title of the prompt                                | Add to Home Screen                                                                                        |
| copySubtitle            | The subtitle of the prompt                             | String(window.location.href)                                                                              |
| copyDescription         | The description of the prompt                          | This website has app functionality. Add it to your home screen to use it in fullscreen and while offline. |
| copyShareStep           | The Share button copy                                  | Press the 'Share' button on the menu bar below                                                            |
| copyAddToHomescreenStep | The Add To Homescreen button copy                      | Press 'Add to Home Screen'                                                                                |
| appIconPath             | Path to an icon or favicon to be shown as the app icon | `https://s2.googleusercontent.com/s2/favicons?domain=${window.location.origin}`                           |
| isShown                 | Can be set to true to manually show the prompt         | undefined                                                                                                 |

```
<PWAPrompt promptOnVisit={1} timesToShow={1} copyClosePrompt="Close" />
```

4. Create your own trigger rules
   You can easily set your own trigger conditions if you don't like the consecutive page loads approach. For example:

```
const [shouldShowPWAPrompt, setShouldShowPWAPrompt] = useState(false)

useEffect(() => {
    // 20% chance of popping up
    setShouldShowPWAPrompt(Math.random() < 0.2)
}, [])

return (
    <PWAPrompt isShown={shouldShowPWAPrompt} />
)
```
