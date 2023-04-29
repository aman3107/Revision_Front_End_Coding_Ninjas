import { Component } from "react";
import title from "./The_Avengers.jpg";
import star from "./star.png";
import plus from "./plus.png";
import minus from "./minus-sign.png";

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      Title: "The Avengers",
      plot: "Super Natural powers shown in the movie",
      price: 199,
      rating: 8.9,
      stars: 0,
    };
    // this.addStars = this.addStars.bind(this);
    let a;
  }

  addStars = () => {
    if (this.state.stars >= 5) {
      return;
    }
    // console.log("Stars Are Added");
    // console.log("this :",this.state)
    // first form

    // this.setState({
    //   stars:this.state.stars +1
    // }, () => {
    //   this.setState({
    //     stars:this.state.stars +1
    //   })
    // })
    // this.setState({
    //   stars:this.state.stars +0.5
    // })
    // this.setState({
    //   stars:this.state.stars +0.5
    // })
    // this.setState({
    //   stars:this.state.stars +0.5
    // })

    //Second form
    // this.setState(
    //   (prevState) => {
    //     return {
    //       stars: prevState.stars + 0.5,
    //     };
    //   },
    //   () => console.log("stars :", this.state.stars)
    // );
    // this.setState(
    //   (prevState) => {
    //     return {
    //       stars: prevState.stars + 0.5,
    //     };
    //   },
    //   () => console.log("stars :", this.state.stars)
    // );
    // this.setState(
    //   (prevState) => {
    //     return {
    //       stars: prevState.stars + 0.5,
    //     };
    //   },
    //   () => console.log("stars :", this.state.stars)
    // );
    // this.setState(
    //   (prevState) => {
    //     return {
    //       stars: prevState.stars + 0.5,
    //     };
    //   },
    //   () => console.log("stars :", this.state.stars)
    // );

    console.log("this :", this.state.stars);
  };

  decStars = () => {
    if (this.state.stars <= 0) {
      return;
    }

    this.setState({
      stars: this.state.stars - 0.5,
    });

    // this.setState((prevState) =>{
    //   return{
    //     stars:prevState.stars-0.5
    //   }
    // })
  };
  render() {
    const { Title, plot, price, rating, stars } = this.state;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="Poster" src={title} />
          </div>
          <div className="right">
            <div className="title">{Title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="decrement"
                  src={minus}
                  onClick={this.decStars}
                />
                <img className="stars" src={star} alt="star" />
                <img
                  className="str-btn"
                  alt="increment"
                  src={plus}
                  onClick={this.addStars}
                />
                <span>{stars}</span>
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
