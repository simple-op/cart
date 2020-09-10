import React from 'react';
import Cart from './Cart';
import Navbar from "./nav";
import firebase from "firebase";

class  App extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [
        // {
        //   price: 99,
        //   title: 'Watch',
        //   qty: 1,
        //   img: 'https://image.flaticon.com/icons/svg/977/977411.svg',
        //   id: 1
        // },
        // {
        //   price: 999,
        //   title: 'Mobile Phone',
        //   qty: 10,
        //   img: 'https://image.flaticon.com/icons/svg/977/977411.svg',
        //   id: 2
        // },
        // {
        //   price: 999,
        //   title: 'Laptop',
        //   qty: 4,
        //   img: 'https://image.flaticon.com/icons/svg/977/977411.svg',
        //   id: 3
        // },
        // {
        //   price: 99,
        //   title: 'Watch',
        //   qty: 1,
        //   img: 'https://image.flaticon.com/icons/svg/977/977411.svg',
        //   id: 4
        // },
        // {
        //   price: 99,
        //   title: 'Mobile Phone',
        //   qty: 10,
        //   img: 'https://image.flaticon.com/icons/svg/977/977411.svg',
        //   id: 5
        // },
        // {
        //   price: 99,
        //   title: 'Laptop',
        //   qty: 4,
        //   img: 'https://image.flaticon.com/icons/svg/977/977411.svg',
        //   id: 6
        // }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
    this.db=firebase.firestore();
  }
  componentDidMount(){
       this.db.collection("products").onSnapshot((doc)=>{
        const products= doc.docs.map((data)=>{
               const   dbdata=   data.data();
               dbdata.id=data.id
           return dbdata
         });

          // const products=doc.docs;
         this.setState({
           products
        })
        
       })
         
       
      }

  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

     this.db.collection("products").doc(product.id).update({
     
     qty:product.qty+1
     
     }
           
     
     ).then(()=>{console.log(product)})
     
   
  }

  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
   
      if(product.qty>0)
     this.db.collection("products").doc(product.id).update({
     
     qty:product.qty-1
     
     }
           
     
     ).then(()=>{console.log(product)})
  //   const { products } = this.state;
  //   const index = products.indexOf(product);
    
    
  //   // console.log(products)
  //  if(products[index].qty>0){
  //  products[index].qty -= 1;
  //   this.setState({
  //     products:products
  //   })
  
}

  delete=(product)=>{
    const {products} =this.state;
    
   
    if(product.qty>0)
   this.db.collection("products").doc(product.id).delete().then(()=>{console.log(product)})
  

    // products.splice(index,1)

    this.setState({
      products
    })

  }

  addProduct=()=>{
      this.db.collection("products").add({
        
            price: 999,
            title: 'Mobile Phone',
            qty: 10,
            img: 'https://image.flaticon.com/icons/svg/977/977411.svg',
            
          

      })

  }

  render(){
  return (
    <div className="App">
       <Navbar itemCount={this.state.products.length}/>

      <div className="cart"></div>
      <Cart   product={this.state.products}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              delete={this.delete}
              onDecreaseQuantity={this.handleDecreaseQuantity}
      />
      <button onClick={this.addProduct}>
        Add Product
      </button>
    </div>
  );

}
}

export default App;
