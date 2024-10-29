import React from 'react'
import { useContext } from 'react'
import { ownContext } from '../store/data'

function CreatePost() {
  const {name,age} = useContext(ownContext)
  return (
    <div>
      this is createpost page{name}
    </div>
  )
}

export default CreatePost
