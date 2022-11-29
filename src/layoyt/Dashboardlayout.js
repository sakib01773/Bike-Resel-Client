import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmmin from '../hocks/useAdmin';
import useSeller from '../hocks/useSeller';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Dashboardlayout = () => {


    const {user} = useContext(AuthContext)

    const [isAdmin] = useAdmmin(user?.email)
    const [isSeller] = useSeller(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side my-10 shadow-lg rounded-lg ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                    <li><Link to='/dashboard'><button className="btn btn-outline w-full">My Dashboard</button></Link></li>
                        
                        {
                            isAdmin && <>
                            <li><Link to='/dashboard/allusers'><button className="btn btn-outline w-full">All Users</button></Link></li>
                            </>
                        }

                        {
                            isSeller &&  <>
                            <li><Link to='/dashboard/myproduct'><button className="btn btn-outline w-full">My Product</button></Link></li>
                            <li><Link to='/dashboard/addproduct'><button className="btn btn-outline w-full">Add Product</button></Link></li>
                            </>
                        }
                        
                        
                        {/* <li><Link to='/dashboard/users'></Link></li> */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboardlayout;