import React from 'react'
import './styles.css'

export const Loading = () => {
  return (
    <div className="flex justify-center mt-10" data-testid="loading">
      <div className="lds-heart">
        <div></div>
      </div>
    </div>
  )
}
