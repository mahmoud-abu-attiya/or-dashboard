import Link from 'next/link'
import React from 'react'

const AddNewD = () => {
  return (
    <Link href="/add-new-client">
      <div className='car and text-center'>
        <i className="fas fa-plus"></i>
        <h5>Add New Client</h5>
      </div>
    </Link>
  )
}

export default AddNewD