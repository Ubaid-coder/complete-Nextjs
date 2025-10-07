import React from 'react'

export const Views = async() => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div>Views</div>
  )
}
