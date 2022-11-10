import React, { useContext } from 'react'
import { myContext } from './Context'

export default function Profile() {
  const ctx = useContext(myContext)
  return (
    <div>
      <h1> Actuel Username : {ctx.username}
      </h1>
    </div>
  )
}
