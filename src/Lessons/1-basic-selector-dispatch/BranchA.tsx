import React from 'react'

import DisplayComponent from './DisplayComponent'

const BranchA: React.FC = () => (
  <div className='branch'>
        <p className="branch__name">Branch A</p>
        <DisplayComponent/>
      </div>
)

export default BranchA;
