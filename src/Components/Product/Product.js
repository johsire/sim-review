import React from 'react'
import '../../App.css'

function Product(props) {
    let { product_id, productName, price, imageURL, } = props

    // console.log('product', props)
    return (
        <div >
            <div>
                <img
                    className='product_image'
                    src={imageURL} />
                <h2>{productName}</h2>
                <h2>Price: ${price}</h2>
                <button
                    onClick={()=>props.updateProduct(props)}
                >Edit</button>
                <button
                    onClick={() => { props.delete(product_id) }}
                >Delete</button>
            </div>

            <hr />
        </div>
    )
};

export default Product;
