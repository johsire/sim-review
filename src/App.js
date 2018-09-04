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

 
  
  updateProduct = (key) => {
    console.log('i still work')
    this.setState({
      addButtonToggle: true
    })
  }

  delete = (id) => {
    console.log(id)
    axios.delete(`/api/products/${id}`)
  }
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Form
        addToInventory = {this.addToInventory}
        saveButtonToggle = {this.state.saveButtonToggle}
        addButtonToggle = {this.state.addButtonToggle}
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
