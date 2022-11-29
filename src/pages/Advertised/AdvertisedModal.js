import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AdertisedModal = ({products, seetCurrentProduct}) => {
    const {user} = useContext(AuthContext)

    console.log(products)

    const handleOrders  = (event) =>{
        event.preventDefault()
        const form = event.target;
        const productName = form.productName.value;
        const price = form.price.value;
        const oldPrice = form.oldPrice.value;
        const location = form.location.value;
        const email = form.email.value;
        const image = form.image.value;

        const ordersProduct = {
            image,
            productName,
            price,
            oldPrice,
            location,
            email
        }

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ordersProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                seetCurrentProduct(null)
            toast.success('Ordered Confiremd')
            }
        })

       

    }
    
    return (
        <>
            {/* The button to open modal */}
            

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="advertisedModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="advertisedModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    

                    <form onSubmit={handleOrders}  className='grid grid-cols-1 gap-3'>
                    <figure className='mb-4'>
                        <img name='image' className='h-80 w-full object-cover rounded-lg' src={products.image} alt="" />
                    </figure>
                    

                    <span>Model: <input name='productName' type="text" disabled defaultValue={products.productName}/></span>
                    
                    <span>Price: <input name='price' disabled defaultValue={products.price} type="number" /></span>
                    <span>Old Price: <input name='oldPrice' disabled defaultValue={products.oldPrice} type="text" /></span>

                    <span>Location: <input name='location' disabled defaultValue={products.location} type="text" /></span>
                    <span>Email: <input name='email' disabled defaultValue={user.email} type="email" /></span>
                    

                    <input className='w-full btn btn-outline' type="submit" value="Orders" />

                    </form>
                </div>
            </div>
        </>
    );
};

export default AdertisedModal;