import React from 'react'
import { Link } from 'react-router-dom';

interface Props {
  
}

const Home = (props: Props) => {
  return (
    <div>
      <Link to='/wine'>Wine</Link>
    </div>
  )
}

export default Home
