import Link from 'next/link'
import React from 'react'

const AddNewD = (props) => {
  return (
    <Link href={props.url}>
      <div className='car and text-center'>
        <i className="fas fa-plus"></i>
        <h5>{props.title}</h5>
      </div>
    </Link>
  )
}

export default AddNewD