import React, {Component} from 'react'

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
    }

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
        })
    
    }

    
    
    render () {
        // console.log('hi', this.state)
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
}
export default Form