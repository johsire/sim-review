import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {
    constructor (props) {
        super (props)

        this.state = {

        }
    }

    render () {
        let{productInventory} = this.props
        if (productInventory.length > 0) {
            let productInfo = productInventory.map((item, index) => {
                let {product_name, price, image_url,} = item

                return (
                        <div key = {index}>
                            <Product
                            productName = {product_name}
                            price = {price}
                            imageURL = {image_url}
                            index = {index}
                            updateProduct = {this.props.updateProduct}
                            delete = {this.props.delete}
                            />
                        </div>
                )
            })
            return productInfo
        }
        else {
            return (
                <div>
                    <h1>Dashboard</h1>
                </div>
            )
        }
    }
}

export default Dashboard

