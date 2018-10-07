# react-native-furi

Japanese Furigana component for react-native

## Installation

```sh
yarn add react-native-furi
```

## Basic Usage

```javascript
import Furi from 'react-native-furi'
```

## Code

```js
  <Furi
    style={{  }}
    value={[
      { value: "北海道", furi: 'ほっかいどう' },
      { value: "ほっかいどう", furi: '' },
    ]}
    valueStyle={{
      // fontFamily: '',
      color: 'black',
      borderColor: 'black',
      borderWidth: 0,
    }}
    furiStyle={{
      // fontFamily: '',
      borderColor: 'red',
      borderWidth: 0,
    }}
    showFuri={true}
    mode="right"
    size={13}
  />
```

## android App

https://play.google.com/store/apps/details?id=org.eseom.ikoitiniti