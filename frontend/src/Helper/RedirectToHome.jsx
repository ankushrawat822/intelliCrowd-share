import React, { useEffect } from 'react'

import { useNavigate  } from 'react-router-dom'

const RedirectToHome = () => {

    const navigate = useNavigate();

    useEffect(() => {
      
       navigate('/')
       console.log("navigate")
     
    }, [])
    

  return (
    <>
     
    </>
  )
}

export default RedirectToHome