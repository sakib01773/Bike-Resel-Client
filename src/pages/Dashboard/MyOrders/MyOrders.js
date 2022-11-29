import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Spiner from '../../../components/Spiner/Spiner';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MyOrders = () => {

    const [deletingUser, setDeletingUser] = useState(null)
    const closeModal = () =>{
        setDeletingUser(null)
    }


    const { data: orders, isLoading, refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/orders/'
                    , {
                        headers: {
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        }
                    }
                );
                const data = await res.json()
                return data;
            }
            catch (error) {

            }
        }
    })

    const handleDeleteUser = (orders) =>{
        // console.log(user)
        fetch(`http://localhost:5000/orders/${orders._id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{

            if(data.deletedCount > 0){
                console.log(data)
                toast.success(`Deleted ${orders.productName} successfully`)
                refetch()
            }
            
        })
    }


    // console.log(orders)

    if(isLoading){
        <Spiner></Spiner>
    }

    return (
        <div>
            <h2 className="text-3xl text-center">My Orders</h2>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
        
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product Details</th>
                            <th>Pay</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead>
                    <tbody>


                        {
                            orders && orders.map((order, i) => <tr key={order._id}>
                                <td>{i+1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={order.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold"></div>
                                            <div className="text-sm opacity-50">{order.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                {order.productName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{order.price}</span>
                                </td>
                                <td>
                                    {
                                        order.price && !order.paid && <Link to={`/dashboard/payment/${order._id}`}>
                                        <button className='btn btn-xs'>Pay</button>
                                        </Link>
                                    }
                                    {
                                        order.price && order.paid && <span className='text-green-600'>Paid</span>
                                    }
                                </td>
                                <th>
                                    <button className="btn btn-ghost btn-xs"><label  
                                        onClick={() =>setDeletingUser(order)}
                                         htmlFor="confirmation_modal" className="btn btn-xs bg-red-600">Delete</label></button>
                                </th>
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

export default MyOrders;