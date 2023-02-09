//step-1 create component, using bootstrap card,
import './card.css';// import css change to image hight,
import { useState } from 'react';
// set the rating using setstate
const StarRating = () => {
    const [rating, setRating] = useState(0);
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              id="star"
              key={index}
              className={index <= rating ? "on" : "off"}
              onClick={() => setRating(index)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };
//step-2 parent to child component datas bye via props,
function CardDetails({item, cart ,handleAddToCart}) {  
    return (
        <div className="col-lg-4 mb-2">
            <div className="card" style={{width: '15rem'}}>
                <img src={item.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <StarRating></StarRating>
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">₹{item.price}</p>
                        <button disabled={cart.some((obj) => obj.id === item.id)} onClick={()=>{handleAddToCart(item)}} className="btn btn-primary">Add to cart</button>
                    </div>
            </div>
        </div>
    )
}

export default CardDetails ;