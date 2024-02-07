

const EnvLocalPage = () => {
    console.log(process.env.MONGO_URL)
    console.log(process.env.JWT_SECRET)

  return (
    <div>
      <h3>EnvLocalPage</h3>  

      {process.env.MONGO_URL ? (
        <h1>DB Successfully Connected</h1>
      ): (
        <h1>404 DB Not Found</h1>
      )}
    </div>
  )
}

export default EnvLocalPage