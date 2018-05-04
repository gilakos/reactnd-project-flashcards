import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'

import * as colors from '../utils/colors'

export default class FieldItem extends Component {
  render() {
    const { label } = this.props
    return (
      <View style={styles.fieldView}>
        <View style={styles.fieldDetailsView}>
          <TouchableOpacity
            onPress={() =>
              this.props.onLabelTouch
                ? this.props.onLabelTouch()
                : this.input.focus()
            }
            style={styles.labelContainer}
          >
            <Text style={styles.label}>{label.toUpperCase()}</Text>
          </TouchableOpacity>
          <TextInput
            ref={ref => {
              this.input = ref
            }}
            {...this.props}
            style={styles.inputText}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  fieldView: {
    flexDirection: 'row',
    paddingVertical: 22,
    borderBottomWidth: 1,
    borderColor: colors.LINEGRAY,
    height: 70
  },
  fieldDetailsView: {
    justifyContent: 'center',
    flex: 1
  },
  labelContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  label: {
    color: colors.SUPERGRAY,
    fontSize: 10,
    lineHeight: 25
  },
  inputText: {
    backgroundColor: 'transparent',
    color: colors.SUPERBLACK,
    fontSize: 15,
  }
})
