import React from 'react'

export const Comments = async() => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
  return (
    <div>5K Comments</div>
  )
}
