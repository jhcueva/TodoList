import React from 'react'
import { withStorageListener } from './withStorageAlert'

export const ChangeAlert = ({ show, toggleShow }) => {
  if (show) {
    return (
      <div>
        <p>Hubo cambios</p>
        <button onClick={() => toggleShow(false)}>Load new tasks</button>
      </div>

    )
  } else {
    return null
  }
}

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)