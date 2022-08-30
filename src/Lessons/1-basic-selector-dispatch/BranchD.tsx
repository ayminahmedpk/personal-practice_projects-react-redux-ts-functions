import {useState} from 'react';
import FlexibleController from './FlexibleController'


const BranchD: React.FC = () => {

  const [role, setRole] = useState<'controlText' | 'controlCount'>('controlCount');

  const flipRole = () => {
    role==='controlCount' ? setRole('controlText') : setRole('controlCount');
  }

  return (
    <div className='branch'>
      <p className="branch__name">
        Branch D <button onClick={flipRole}>Flip role</button>
      </p>
      <FlexibleController role={role}/>
    </div>
  )

}


export default BranchD;