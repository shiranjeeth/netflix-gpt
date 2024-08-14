import React from 'react'
import {BACK_IMG} from '../utils/constants.js'
import { LOGO } from '../utils/constants.js'

const Header = () => {
  return (
    <div>
      <div className='absolute w-44 px-10 py-4 bg-gradient-to-b from-black' >
      <img src={LOGO} />
      </div>
    </div>
  )
}

export default Header
