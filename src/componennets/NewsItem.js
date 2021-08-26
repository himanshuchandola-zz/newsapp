import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
       let {title, description,} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
  <img src="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="/newsdetail" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
            </div>
        )
    }
}

export default NewsItem
