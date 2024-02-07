'use client'

import { useRouter } from "next/navigation";

import { Roboto } from "next/font/google";
import { Single_Day } from "next/font/google";

const roboto = Roboto({subsets: ['latin'], weight: '500'})
const singleDay = Single_Day({subsets: ['latin'], weight: '400'})

export default function Home() {
  const router = useRouter()

  return (
     <section>
       <h1>Google Fonts</h1>
       <h2 className={roboto.className}>Hello This Is Roboto Font</h2> 
       <h2 className={singleDay.className}>Hello This Is Single_Day Font</h2>

       <h4>useRouter()</h4>
       
       {/* My useRouter didn't work */}

      {/* Always add 'use client' anytime we are using eventHandlers  */}
       <button onClick={() => router.push('user')}>useRouter goes to user</button>
     </section>
  );
}
