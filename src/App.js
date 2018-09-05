import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import axios from 'axios'

class App extends Component {
  constructor (props) {
    super (props)

    this.state = {
      productInventory:[],
      saveButtonToggle: false,
      addButtonToggle: false,
      activeProduct: {},
    }
  }

  componentDidMount () {
    axios.get('/api/inventory')
    .then(res => this.setState({
      productInventory: res.data
    }))
  }

  addToInventory = (imgURL, pName, pPrice) => {
    axios.post('/api/product', {imgURL: imgURL, pName: pName, pPrice: pPrice})
    .then(res => this.setState({
      productInventory: res.data,
    }))
    
  }

 
  
  updateProduct = (productInfo) => {
    console.log('i still work')
    this.setState({
      addButtonToggle: true,
      activeProduct: productInfo,
    })
  }

  delete = (id) => {
    axios.delete(`/api/products/${id}`)
         .then(res => this.setState({ productInventory: res.data }))
  };
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Form
          addToInventory = {this.addToInventory}
          saveButtonToggle = {this.state.saveButtonToggle}
          addButtonToggle = {this.state.addButtonToggle}
          activeProduct = {this.state.activeProduct}
        />
        <Dashboard
          delete = {this.delete}
          updateProduct= {this.updateProduct}
          productInventory = {this.state.productInventory}

        />
      </div>
    );
  }
}

export default App;
