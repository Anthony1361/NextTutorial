import { redirect } from "next/navigation"


const IdPage = ({params}) => {
    // Any id digit in the route will get this page . //
    if(params.id == 4) {
      redirect('/redirect2')
    }
  return (
    <div>IdPage {params.id}</div>
  )
}

export default IdPage