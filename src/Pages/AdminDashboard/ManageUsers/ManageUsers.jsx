import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })


    return (
        <div>
            <h2 className='text-3xl font-medium'>Total Users: {users.length}</h2>
        </div>
    );
};

export default ManageUsers;