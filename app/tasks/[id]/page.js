import EditForm from '@/components/EditForm';
import { getTask } from '@/utils/actions';
import Link from 'next/link';

const EditTaskPage =  async ({ params }) => {
    const task = await getTask(params.id);
  return (
  <>
    <div className='mb-16'>
        <Link href='/task' className='btn btn-accent'>
            back to tasks
        </Link>
    </div>
    <EditForm task={task}/>
    </>
  )
}

export default EditTaskPage
