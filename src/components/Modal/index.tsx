import { useState } from 'react'
import './style.css'

export function Modal() {

  const [visible, 
    // setVisible
  ] = useState(true);

  return (
    <>
      <div className={`modal-student ${ visible ? '' : 'not-visible' }`} />
      <div className={`modal-student__container ${ visible ? '' : 'not-visible' }`} />
    </>
  )
}