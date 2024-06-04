import React from 'react'
import Button from '../../ui/Button'

interface Iprops {
  btnGroup: string
  btn1: string
  btn2: string
  onClick: () => void
}

export default function BtnGroup({ btn1, btn2, btnGroup, onClick }: Iprops) {
  return (
    <div className={`${btnGroup}`}>
      <Button onClick={onClick} className={`btnIcon ${btn1}`}>
        Sign In
      </Button>
      <Button onClick={onClick} className={`btnIcon ${btn2}`}>
        Register
      </Button>
    </div>
  )
}
