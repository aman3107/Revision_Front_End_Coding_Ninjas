import { Component } from "react";
import title from "./The_Avengers.jpg";
import star from "./star.png";
import plus from "./plus.png";
import minus from "./minus-sign.png";

class MovieCard extends Component {
  render() {
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="Poster" src={title} />
          </div>
          <div className="right">
            <div className="title">The Avengers</div>
            <div className="plot">Super Natural powers shown in the movie</div>
            <div className="price">Rs. 199</div>
            <div className="footer">
              <div className="rating">8.9</div>
              <div className="star-dis">
                <img className="str-btn" alt="increment" src={minus} />
                <img className="stars" src={star} alt="star" />
                <img className="str-btn" alt="increment" src={plus} />
                <span>0</span>
              </div>
              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
