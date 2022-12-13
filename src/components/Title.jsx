import React from 'react'

function Title({children, id}) {
  return (
    <h4 
        id = {id && id}
        className='text 2-xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-300'
    >{children}</h4>
  )
}

export default Title
