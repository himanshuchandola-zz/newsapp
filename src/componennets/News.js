import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super(); 
        this.state = {
            articles: [],
            loading: true
        }

}

async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=fa27fd408cde4d74a17a94089dbb91ac";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
}
    render() {
        return (
            <div className="container my-3">
               <h2> Top Headlines </h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url} >
                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl= {element.urlToImage}s newsUrl={element.url}/>
                 </div>
                })}
                    
                     
                </div>
            </div>
        )
    }
}

export default News
