import React from 'react'

import CountController from './CountController'

const BranchB: React.FC = () => (
  <div className='branch'>
      <p className="branch__name">Branch B</p>
      <CountController/>
  </div>
)

export default BranchB;