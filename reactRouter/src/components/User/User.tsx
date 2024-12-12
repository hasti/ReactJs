import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
   <div className='m-auto text-center p-4 bg-gray-600 text-white'> User: {userid} </div>
  )}

export default User