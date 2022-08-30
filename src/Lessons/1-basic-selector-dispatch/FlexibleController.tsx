import React from 'react'

import { useSelector } from 'react-redux/es/hooks/useSelector'
import { StateType   } from '../../Redux/store'

import { useDispatch          } from 'react-redux/es/hooks/useDispatch'
import { textChange           } from '../../Redux/text/textActionCreators'
import { increment, decrement } from '../../Redux/count/countActionCreators'
import { reset                } from '../../Redux/globalActionCreators'

import { Dispatch      } from 'redux'
import { TextActions   } from '../../Redux/text/textActions'
import { CountActions  } from '../../Redux/count/countActions'
import { GlobalActions } from '../../Redux/globalActions'


type FlexibleControllerProps = {
  role: 'controlText' | 'controlCount';
}


const FlexibleController:React.FC<FlexibleControllerProps> = (props) => {

  const text = useSelector((state:StateType) => state.textReducer.text);

  const dispatch = useDispatch<Dispatch<TextActions | CountActions | GlobalActions>>();

  const textController = (
    <>
        <p>Controlling text</p>
        <input
          type     = "text"
          value    = {text}
          onChange = {(event) => dispatch(textChange(event))}
        />
    </>
  )

  const countController = (
    <>
      <p>Controlling Count</p>
      <button onClick={() => dispatch(decrement())}>{'<'}</button>
      <button onClick={() => dispatch(increment())}>{'>'}</button>
    </>
  )

  return (
    <div className='component'>
      <p className="component__name">FlexibleController</p>
      {props.role === 'controlText' ? textController : countController}
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
  
}


export default FlexibleController;