import Link from "next/link";

const HomePage = () => {
  console.log('I am a server');
  return (
    <div>
      <h1 className='text-5xl mb-8 font-bold'>Tutorial</h1>
      <Link href = '/client' className='btn btn-accent capitalize' >
       get started
      </Link>
    </div>
  )
}

export default HomePage

