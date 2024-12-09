import { useState } from "react"


function Home() {
  // const name:string = 'Mg Mg'
  // hook #
 const [name, setName] = useState<string>('Mg Mg2')

 
  return (
    <div>
      {/* add banner */}
      {
        name == "Mg Mg"?(
          <h1 className={name === 'Mg Mg' ? 'text-red-700 text-3xl font-bold' : 'text-green-700 text-2xl font-semibold'}>Welcome {name}</h1>
         ) : (
          <h1 className={name === 'Mg Mg' ? 'text-red-700 text-3xl font-bold' : 'text-green-700 text-2xl font-semibold'}>Welcome Guest</h1>
         )
      }
      <p className={name === 'Mg Mg' ? 'text-red-400' : 'text-green-400' }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cum quisquam nobis, labore officia consequatur quos error porro soluta molestiae!</p>
    </div>
  )
}

export default Home
