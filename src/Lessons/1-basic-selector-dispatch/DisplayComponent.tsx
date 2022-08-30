import { useSelector } from 'react-redux/es/exports';
import { StateType } from '../../Redux/store';

const DisplayComponent = () => {
  
  // The 'connect' call and the mapStateToProps function are replaed by this
  
  // Doesn't infer very well - have to explicitly state the returned type
  // const count   = useSelector<StateType, number>(state => state.countReducer.count);

  const count   = useSelector((state:StateType) => state.countReducer.count  );
  const text    = useSelector((state:StateType) => state.textReducer.text    );
  const loading = useSelector((state:StateType) => state.usersReducer.loading);
  const users   = useSelector((state:StateType) => state.usersReducer.users  );
  const error   = useSelector((state:StateType) => state.usersReducer.error  );

  return (
    <div className='component'>
      <p className="component__name">DisplayComponent</p>
      <p>this.props.count = {count}</p>
      <p>this.props.text = {text}</p>
      <br />
      
      <p>User list:</p>
      
      {loading ? <p>Fetching users...</p> : ''}
      
      {
        users.length === 0 ?
        '<empty>' :
        users.map(user => <p key={user.id}>{user.name}</p>)
      }
      
      {error? `Error: ${error}:` : ''}
    </div>
  )
}

export default DisplayComponent;