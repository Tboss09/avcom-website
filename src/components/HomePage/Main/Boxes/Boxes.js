import React from 'react'

// Internal Files
import IndustrialNetwork from './IndustrialNetwork'
import CyberSecurity from './CyberSecurity'
import SmartDevice from './SmartDevice'
import IndustrialServer from './IndustrialServer'

const Boxes = () => {
 return (
  <div className="boxes">
   <IndustrialNetwork />
   <CyberSecurity />
   <IndustrialServer />
   <SmartDevice />
  </div>
 )
}

export default Boxes
