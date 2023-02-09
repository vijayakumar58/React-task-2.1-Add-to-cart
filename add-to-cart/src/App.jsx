import './App.css';
//step-1 import bootstrap,CardDetails
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDetails from './CardDetails';
import CartItems from './CartItems';
import { useState } from 'react';
//step-2 create the app in add to cart , 
function App() {
  const products = [
    {
      id: "1",
      image: "https://media.istockphoto.com/id/502129687/photo/decorative-cosmetics-for-makeup.jpg?s=1024x1024&w=is&k=20&c=wGmovDLR3scv2NWrha6VGUO82qn_cWwxBh1ljemwo-0=",
      title: "Fancy Products",
      price: 4540.00
    },
    {
      id: "2",
      image: "https://m.media-amazon.com/images/I/71u3QxI3QvL._UY695_.jpg",
      title: "Special Item",
      price: 1458.00
    },
    {
      id: "3",
      image: "https://m.media-amazon.com/images/I/71Ye4QY493L._SX679_.jpg",
      title: "Male Puppets",
      price: 2025.00
    },
    {
      id: "4",
      image: "https://m.media-amazon.com/images/I/413LMwScBjS._SX679_.jpg",
      title: "Wifi Booster",
      price: 3240.00
    },
    {
      id: "5",
      image: "https://m.media-amazon.com/images/I/81wN5ep5CAL._SY879_.jpg",
      title: "JH Lotus Hangings",
      price: 2025.00
    },
    {
      id: "6",
      image: "https://m.media-amazon.com/images/I/71+FRIdP3pL._UL1500_.jpg",
      title: "Indian Kanjivaram Silk",
      price: 16720.00
    },
    {
      id: "7",
      image: "https://m.media-amazon.com/images/I/61xlUgke8BL._UX679_.jpg",
      title: "Men's Sherwani Set",
      price: 1458.00
    },
    {
      id: "8",
      image: "https://m.media-amazon.com/images/I/616e2t492uL._SX679_.jpg",
      title: "Alpha Smart Watch ",
      price: 3240
    }
  ]
  //using usestate method because mutate the data & add the values
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (item) => {
    setCart([...cart, item])
    setTotal(total + item.price)
  };
  //using findindex remove the values of add to cart
  let removeFromCart = (item) => {
    let index = cart.findIndex((obj) => obj.id === item.id);
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(total - item.price);
  }


  return (<>
    {/* create using header */}
    <header className="bg-primary py-5 mb-2">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-warning">
          <h1 className="display-4 fw-bolder">OIP Shoping Platform</h1>
          <p className="lead fw-normal text-warning-100 mb-0">Best Product Best Quality</p>
        </div>
      </div>
    </header>
    {/* //step-3 create container with using column split to page in col-lg-8 is card datas , 
    col-lg-4 is addtocard details */}
    <div className="container">
      <div className="row">
        <div className="col-lg-8" >
          {/*step-4 create row inside of column using to cards split ; */}
          <div className="row">
            {/*step-5 using CardDetails component, using map method & parent to child component datas passing to props, 
            cart={cart} this full cart values are upload the this area */}
            {
              products.map((item) => {
                return <CardDetails item={item} cart={cart} handleAddToCart={addToCart}></CardDetails>
              })
            }
          </div>
        </div>
        <div className='col-lg-4'>
          {
            cart.length === 0 ? <div> <b>No Items in Cart </b></div> : <div className='row'>
              <ol className="list-group list-group-numbered">
                {/* step-5 using Cart component,usestate using map */}
                {cart.map((cartItem) => {
                  return <CartItems cartItem={cartItem} RemoveFromCart={removeFromCart}></CartItems>
                })}
              </ol>
              <h1>Total = ₹ {total}</h1>
            </div>
          }
        </div>
      </div>

    </div>
    <footer className="py-5 bg-warning">
       <div className="container"><p className="m-0 text-center text-primary">Copyright &copy; OIP Website 2022</p></div>
    </footer>
  </>);
}

export default App;
