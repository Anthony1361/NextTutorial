'use client'

const Project = ({params}) => {
    console.log(params)
  return (
//   just like dynamicRoute, any name will get this page but unlike in dynamicRoute, multiple routes names can follow-up/added-up to give u the same page .//
    <div>
       <h1>Project {params.all}</h1> 
       <br></br>
       <h2>All Routes</h2>
       {params.all.map((p) => (
        <li key={p}>{p}</li>
       ))}
    </div>
  )
}

export default Project