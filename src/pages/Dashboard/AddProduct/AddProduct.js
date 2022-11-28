import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate()

    const {user} = useContext(AuthContext)


    const imageHostKey = process.env.REACT_APP_imgbb_key;
    // console.log(imageHostKey)


    const handleAddProduct = (data) => {
        console.log(data)
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            console.log(imgData)

            if(imgData.success){
                console.log(imgData.data.url)

                const product = {
                    email: user.email,
                    productName: data.productName,
                    price: data.price,
                    conditionType: data.conditionType,
                    number: data.number,
                    location: data.location,
                    productCategory: data.productCategory,
                    purchase: data.purchase,
                    oldPrice: data.oldPrice,
                    image: imgData.data.url

                }

                // save product information to the db
                fetch('http://localhost:5000/products', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result)
                    toast.success(`${data.productName} added successfully`)
                    navigate('/')
                })
            }
        })


    }
    return (
        <div>
            

            <div className='mt-8 flex justify-center'>

                <div className='border-2 p-7 rounded-xl shadow-lg w-96'>
                <h1 className="text-3xl text-center">Add A product</h1>

                    <form onSubmit={handleSubmit(handleAddProduct)}>

                        {/* Product Name  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>

                            </label>

                            <input type='text'
                                {...register("productName", { required: 'productName is requred' })}
                                className="input input-bordered w-full max-w-xs" />

                            {errors.productName && <p role='alert' className='text-red-500'>{errors.productName.message}</p>}

                        </div>

                        {/* Product Price  */}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>

                            <input type='text'
                                {...register("price", { required: 'price is requred' })}
                                className="input input-bordered w-full max-w-xs" />

                            {errors.price && <p role='alert' className='text-red-500'>{errors.price.message}</p>}

                        </div>

                        {/* condition type */}


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Condition Type</span>
                            </label>

                            <select className="select select-bordered w-full max-w-xs"
                            {...register("conditionType", { required: 'conditionType is requred' })}
                            >
                                <option>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>

                            {errors.conditionType && <p role='alert' className='text-red-500'>{errors.conditionType.message}</p>}

                        </div>


                        {/* mobile number  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Mobile Number</span>
                            </label>

                            <input type='number'
                                {...register("number", { required: 'Number is requred' })}
                                className="input input-bordered w-full max-w-xs" />

                            {errors.number && <p role='alert' className='text-red-500'>{errors.number.message}</p>}

                        </div>


                        {/* location  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>

                            <select className="select select-bordered w-full max-w-xs"
                            {...register("location", { required: 'location is requred' })}
                            >
                                <option>Dhaka</option>
                                <option>Chittagonj</option>
                                <option>Chandpur</option>
                                <option>Faridpur</option>
                            </select>

                            {errors.location && <p role='alert' className='text-red-500'>{errors.location.message}</p>}

                        </div>

                        {/* product category  */}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Category</span>

                            </label>

                            <input type='text'
                                {...register("productCategory", { required: 'productCategory is requred' })}
                                className="input input-bordered w-full max-w-xs" />

                            {errors.productCategory && <p role='alert' className='text-red-500'>{errors.productCategory.message}</p>}

                        </div>

                        {/* description  */}


                        {/* year of purchase */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Year of Purchase</span>
                            </label>

                            <input type='date'
                                {...register("purchase", { required: 'purchase is requred' })}
                                className="input input-bordered w-full max-w-xs" />

                            {errors.purchase && <p role='alert' className='text-red-500'>{errors.purchase.message}</p>}

                        </div>

                        {/* old price  */}


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Old Price</span>

                            </label>

                            <input type='text'
                                {...register("oldPrice", { required: 'oldPrice is requred' })}
                                className="input input-bordered w-full max-w-xs" />

                            {errors.oldPrice && <p role='alert' className='text-red-500'>{errors.oldPrice.message}</p>}

                        </div>

                        {/* image  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Image</span>

                            </label>

                            <input type='file'
                                {...register("image", { required: 'image is requred' })}
                                className="file-input file-input-bordered w-full max-w-xs" />

                            {errors.image && <p role='alert' className='text-red-500'>{errors.image.message}</p>}

                        </div>


                        <input className='btn btn-accent w-full mt-5' value='Add Product' type="submit" />

                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddProduct;