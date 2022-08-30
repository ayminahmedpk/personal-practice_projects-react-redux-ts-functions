import React from 'react'

import {useDispatch} from 'react-redux/es/exports'
import { Dispatch } from 'redux'

import { reset } from '../../Redux/globalActionCreators'
import { increment, decrement } from '../../Redux/count/countActionCreators'
// import { AppActions } from '../../Redux/store'
import { CountActions } from '../../Redux/count/countActions'
import { GlobalActions } from '../../Redux/globalActions'

const CountController = () => {

  // The 'connect' call and the mapDispatchToProps function are replaed by this

  // const dispatch = useDispatch<Dispatch<AppActions>>();
  // Overkill - start by granting minimal access
  // similar to Deny By Default policy of a firewall
  
  const dispatch = useDispatch<Dispatch<CountActions | GlobalActions>>();

  return (
    <div className='component'>
      <p className="component__name">CountController</p>
      <button onClick={() => dispatch(decrement())}>{'<'}</button>
      <button onClick={() => dispatch(increment())}>{'>'}</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}
  
export default CountController;

