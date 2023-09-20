function NewsItem({item}){
   const websiteUrl = item.url;
   const website = websiteUrl.split('https://').pop().split('/')[0]
    const date = item.publishedAt
    const formatDate = date.replace('T' , " ")
    const formatTime = formatDate.replace('Z' , " ")

    return (
        <a href="/" className="article">
            <div className="article-image">
                <img src={item.urlToImage} alt={item.title} />
            </div>
            <div className="article-content">
            <img src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE%2CSIZE%2CURL&url=http%3A%2F%2Fwww.google.com&size=16`} alt={item.source.id}/>
            <span></span>
            </div>
            <div className="article-title">
                <h2>{item.source.name}</h2>
            </div>
            <p className="article-description">
                {item.description}
            </p>
            <div className="article-details">
                <small><b>Published At: </b>{formatTime}</small>
            </div>
        </a>
    )

}


export default NewsItem