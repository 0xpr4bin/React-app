import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const SingleMovie = () => {
    const { id } = useParams();
  return (
    <>
    <div>
        Our single movie page. {id}
    </div>
    </>
    
  )
}

export default SingleMovie;
