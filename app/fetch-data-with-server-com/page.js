
async function fetchData(){
  let data = await fetch('https://jsonplaceholder.typicode.com/posts')
  data = await data.json()
  return data;
}

const ServerDataPage = async () => {
  let products = await fetchData()
  console.log(products)

  return (
    <div>
      <h1>ServerDataPage</h1>

      {products?.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  )
}

export default ServerDataPage