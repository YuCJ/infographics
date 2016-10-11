/* eslint-disable react/jsx-no-bind, react/jsx-no-literals, max-len */

import React, { Component } from "react"
import Markdown from "react-markdown"

import classnames from "classnames"
import styles from "./Tnr.scss"
import commonStyles from "../../../styles/common.scss"

import { topBox } from "./text"

// let velocity
// if (typeof window !== "undefined") {
//   velocity = require("velocity-animate")
// }

export default class Tnr extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSubComponent: true,
    }

  }

  render() {
    return (
      <div className={ classnames(styles.container,
        commonStyles["text-center"]) }
        ref={ (ref) => this.container = ref }
      >
      <div className={ commonStyles["content-outer"] }>
        <div className={ classnames(styles["content-box"]) }>
          <Markdown source={ topBox } />
        </div>
      </div>

      </div>
    )
  }
}

Tnr.propTypes = {}
