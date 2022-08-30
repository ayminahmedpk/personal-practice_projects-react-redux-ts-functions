
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { makeRequest } from '../../Redux/users/usersActionCreators'

import { ThunkDispatch } from 'redux-thunk'
import { StateType     } from '../../Redux/store'
import { userActions   } from '../../Redux/users/userActions'


const FetchController = () => {

  // Didn't work - gives an error
  // const dispatch = useDispatch<Dispatch<userActions>>();
  const dispatch = useDispatch<ThunkDispatch<StateType, {}, userActions>>();
  
  // const dispatch = useDispatch();

  return (
    <div className="component">
      <div className="component__name">FetchController</div>
      <button onClick={() => dispatch(makeRequest())}>Make Request</button>
    </div>
  )
}

export default FetchController;