import AnyName from '@/public/NatureImage.jpg'
import Image from 'next/image'

const users = () => {
  return (
    <div>
      <p>this is the users page</p>
        
      <Image src={AnyName} alt='Nature Image' width={500} height={500}></Image>  

      <br></br>

      {/* for external images */}
      <Image src='https://plus.unsplash.com/premium_photo-1675433344518-21eb72dfc7a5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      
      alt='Nature Image' width={500} height={500}></Image>
    </div>
  )
}

export default users

// This is for SEO ... //
export const generateMetadata = () => {
  return {
    title : "This is a user page",
    description : "All about the users"
  }
}