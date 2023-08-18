import React from 'react'
import { Text, View, StyleProp } from 'react-native'

type FuriWordState = {
}

interface FuriWordProps {
  value?: string,
  furi?: string,
  style?: StyleProp<any>,
  valueStyle?: StyleProp<any>,
  furiStyle?: StyleProp<any>,
  size?: number,
  showFuri?: boolean,
}

class FuriWord extends React.Component<FuriWordProps, FuriWordState> {
  shouldComponentUpdate() {
    if (!this.props.furi)
      return false
    return true
  }
  render() {
    const size = this.props.size ? this.props.size : 12
    const furiSize = size * 0.5
    const value = this.props.value ? this.props.value : ''
    return !this.props.furi
      ? (
        <View style={[{ justifyContent: 'flex-end' }, this.props.style]}>
          <Text style={[{ fontSize: size }, this.props.valueStyle]}>{this.props.value}</Text>
        </View>
      )
      : (
        <View style={[{}, this.props.style]}>
          <Text style={[{ fontSize: furiSize, textAlign: 'center' }, this.props.furiStyle, (!this.props.showFuri ? { opacity: 0 } : {})]}>{this.props.furi ? this.props.furi : ' '}</Text>
          <View style={{ borderColor: 'red', borderWidth: 0, flexDirection: 'row', justifyContent: value.length > 1 ? 'space-between' : 'center' }}>
            {[...value].map((item, index) => (
              <Text key={index} style={[{ fontSize: size }, this.props.valueStyle]}>{item}</Text>
            ))}
          </View>
        </View>
      )
  }
}

type Value = {
  value: string,
  furi?: string,
}

interface FuriProps {
  value: Value[],
  style?: StyleProp<any>,
  valueStyle?: StyleProp<any>,
  furiStyle?: StyleProp<any>,
  size?: number,
  showFuri?: boolean,
  mode?: string,
}

interface FuriState {
}

export default class Furi extends React.PureComponent<FuriProps, FuriState> {
  render() {
    const value = [
      ...this.props.value,
    ]
    // const nv = value
    const nv: Value[] = []
    value.forEach((item) => {
      if (item.furi)
        nv.push(item)
      else
        [...item.value].forEach((item2) => {
          nv.push({ value: item2, furi: '' })
        })
    })

    const size = this.props.size ? this.props.size : 12
    const furiSize = size * 0.6

    const array = (this.props.mode === 'right'
      ? nv.map((item: Value, index) => (
        item.furi && this.props.showFuri
          ? <Text key={index}><Text style={this.props.valueStyle}>{item.value}</Text><Text style={[{ fontSize: furiSize }, this.props.furiStyle]}>{item.furi}</Text></Text>
          : <Text key={index} style={this.props.valueStyle}>{item.value}</Text>
      ))
      : nv.map((item: Value, index) => (
        (item.value === '\n'
          ? <View key={index} style={{ width: '100%', height: 10 }} />
          : <FuriWord
            key={index}
            value={item.value}
            size={this.props.size}
            furi={item.furi}
            style={{ ...this.props.style }}
            valueStyle={{ ...this.props.valueStyle }}
            furiStyle={{ ...this.props.furiStyle }}
            showFuri={this.props.showFuri}
          />
        )
      ))
    )

    return (
      <View style={{ ...this.props.style, flexDirection: 'row', display: 'flex', flexWrap: 'wrap' }}>
        {array}
      </View >
    )
  }
}