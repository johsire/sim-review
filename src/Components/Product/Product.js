import React from 'react'
import '../../App.css'

function Product(props) {
    let { index, productName, price, imageURL, } = props

    console.log('product', props)
    return (
        <div >
            <div>
                <img
                    className='product_image'
                    src={imageURL} />
                <h2>{productName}</h2>
                <h2>Price: ${price}</h2>
                <button
                    onClick={props.updateProduct}
                >Edit</button>
                <button
                    onClick={() => { props.delete(index) }}
                >Delete</button>
            </div>

            <hr />
        </div>
    )
}
export default Product