import Link from "next/link";

const TasksPage = () => {
    return (
      <div>
        <h1 className='text-7xl'>TasksPage</h1>
        <Link href = '/' className='text-2xl'>
            back to Home Page
        </Link>
      </div>
    )
  }
  
  export default TasksPage
  