import React, { Component } from 'react'

import { Provider } from 'react-redux'
import store from '../../Redux/store'

import BranchA from './BranchA'
import BranchB from './BranchB'
import BranchC from './BranchC'
import BranchD from './BranchD'
import BranchE from './BranchE'

export default class LessonRoot1 extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='LessonRoot1'>
          <p className="LessonRoot1__name">LessonRoot1</p>
          <div className="branches">
            <BranchA/>
            <BranchB/>
            <BranchC/>
            <BranchD/>
            <BranchE/>
          </div>
        </div>
      </Provider>
    )
  }
}
