

import { useSelector } from 'react-redux/es/hooks/useSelector'
import { StateType   } from '../../Redux/store'

import { Dispatch      } from 'redux'
import { useDispatch   } from 'react-redux/es/hooks/useDispatch'
import { reset         } from '../../Redux/globalActionCreators'
import { textChange    } from '../../Redux/text/textActionCreators'
import { TextActions   } from '../../Redux/text/textActions'
import { GlobalActions } from '../../Redux/globalActions'




const TextController = () => {

  const text = useSelector((state:StateType) => state.textReducer.text);

  const dispatch = useDispatch<Dispatch<TextActions | GlobalActions>>();

  return (
    <div className='component'>
      <p className="component__name">TextController</p>
      <input
        type="text"
        value={text}
        onChange={(event) => dispatch(textChange(event))}
      />
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}


export default TextController;