import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Spiner from '../../../components/Spiner/Spiner';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllUsers = () => {

    const [deletingUser, setDeletingUser] = useState(null)
    const closeModal = () =>{
        setDeletingUser(null)
    }



    const { data: users = [],isLoading , refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json()
            return data;
        }
    })

    const handleDeleteUser = (user) =>{
        // console.log(user)
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{

            if(data.deletedCount > 0){
                console.log(data)
                toast.success(`Deleted ${user.name} ${user.allUsers} successfully`)
                refetch()
            }
            
        })
    }


    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful')
                    refetch()
                }

            })
    }

    if(isLoading){
        return <Spiner></Spiner>
    }

    return (
        <div>
            <h2 className="text-3xl">All users</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Type</th>
                            <th>Admin</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <tr key={user._id}
                                    className="hover">
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.allUsers}</td>
                                    <td>
                                        {user?.role !== 'Admin' &&
                                            <button className='btn btn-xs' onClick={() => handleMakeAdmin(user._id)}>Make Admin</button>
                                        }

                                    </td>
                                    <td>
                                        <label  
                                        onClick={() =>setDeletingUser(user)}
                                         htmlFor="confirmation_modal" className="btn btn-xs bg-red-600">Delete</label>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

            {
                deletingUser && <ConfirmationModal
                title={`Are you sure you want to delete...`}
                message={`If you delete ${deletingUser.name}`}
                successAction = {handleDeleteUser}
                modalData = {deletingUser}
                closeModal={closeModal}
                successButtonName= "Delete"
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllUsers;