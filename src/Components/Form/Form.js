import React, {Component} from 'react'
import Product from '../Product/Product';

class Form extends Component {
    constructor (props) {
        super (props)

        this.state = {
            imgURL: '',
            pName: '',
            pPrice: '',
            addButtonToggle: false,
        }
        this.handleChange = this.handleChange.bind(this)
    };

    componentDidUpdate(prevProps) {
        if(prevProps.activeProduct.product_id !== this.props.activeProduct.product_id){
            const { imageURL, price } = this.props.activeProduct

            this.setState({
                imageURL: this.imageURL,
                pName: productName,
                pPrice: price,
            });
        };
    };

    handleChange (val) {
        this.setState({
            [val.target.name]: val.target.value,
            addButtonToggle: true
            
        })
        
    }

    handleCancel = () => {
        // console.log("you canceled!")
        this.setState({
            imgURL: '',
            pName: '',
            pPrice: '',
            addButtonToggle: false
        });
    };


    render () {
        console.log('form props', this.props);
        return (
            <div>
                <h1>Form</h1>
                <div>
                    <h4>Image URL:</h4>
                    <input
                        value = {this.state.imgURL}
                        onChange = {this.handleChange} 
                        name = 'imgURL'/>
                </div>
                <div>
                    <h4>Product Name:</h4>
                    <input
                        value = {this.state.pName} 
                        onChange = {this.handleChange}
                        name = 'pName'
                        />
                </div>
                <div>
                    <h4>Price:</h4>
                    <input
                        value = {this.state.pPrice} 
                        onChange = {this.handleChange}
                        name = 'pPrice'/>
                </div>
                    <button
                        onClick = {this.handleCancel}
                    >Cancel
                    </button>
                    <button
                        onClick = {() => {
                            let {imgURL, pName, pPrice} = this.state
                            // console.log(pName)
                            this.props.addToInventory(imgURL, pName, pPrice)
                             this.setState({
                                    imgURL: '',
                                    pName: '',
                                    pPrice: ''
                            })
                            
                        }}
                    >{
                        this.props.addButtonToggle
                        ?
                        'Save Changes'
                        :
                        'Add Item'
                    }
                    </button> 
                     <hr/>  
                </div>
        )
    }
};

export default Form
