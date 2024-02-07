'use client'

const userDynamic = ({params}) => {
  return (
    // can get this page with any name route after dynamicRoute path .///
    <div>
       <h1>Info about {params.user}</h1>
       <p>Hello i'm {params.user}</p>
    </div>
  )
}

export default userDynamic