import { useState } from "react"

type ButtonProps = {
  text: string,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Home() {
  // const name:string = 'Mg Mg'
  // hook #
 const [name, setName] = useState<string>('Mg Mg')

 const handleClick = () => {
  setName(name === 'Mg Mg' ? 'Guest' : 'Mg Mg')
 }
 const [show, setShow] = useState<boolean>(false);
 const [count, setCount] = useState<number>(0);
 
  return (
    <div>
      <h2 className={show === true ? 'block' : 'hidden'}>Counter Number is {count}</h2>
      <Button text="Show Number Toggle" onClick={() => setShow(!show)} /> <br />
      <Button text="Add" onClick={() => setCount(count + 1)} /> <br />
      <Button text="Remove" onClick={() => setCount(count - 1)} /> <br />
      <Button text="Change Text" onClick={handleClick} />

      {/* <button onClick={handleClick} className="text-blue-900">Change Text</button> */}
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

function Button({text, onClick}: ButtonProps) {
  return (
    <button onClick={onClick} className="py-2 px-4 rounded-sm bg-red-300">{text}</button>
  )
}

export default Home
