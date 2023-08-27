import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description, imageUrl, newsUrl, author, date, source}=this.props;
    return (
      <>
      <div className="my-3">
        <div className="card">
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute', 
            right:'0'
          }}>
          <span className="badge rounded-pill bg-danger">
          {source}
          </span>
          </div>
          <img src={!imageUrl? "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2023/8/23/ca00e674-de72-44cb-8739-f66784af5925.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author? "Unknown": author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read full news</a>
  </div>
</div>
      </div>
      </>
    )
  }
}

export default NewsItem
