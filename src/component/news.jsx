
import React, { Component } from "react";

const News = (b) => {
    console.log(b);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            <div className="news">
            <div className="news-container">
            <h1>{obj.news.h1}</h1>
            <p>{obj.news.p}</p>
            <ul>
                <li>
                    <img src={obj.news.arr[0].img} />
                    <button>{obj.news.arr[0].p}</button>
                    <h4>{obj.news.arr[0].h4}</h4>
                    <h3>{obj.news.arr[0].h3}</h3>
                    </li>
                <li>
                    <img src={obj.news.arr[1].img} />
                    <button>{obj.news.arr[1].p}</button>
                    <h4>{obj.news.arr[1].h4}</h4>
                    <h3>{obj.news.arr[1].h3}</h3>
                    </li>

                <li>
                    <img src={obj.news.arr[2].img} />
                    <button>{obj.news.arr[2].p}</button>
                    <h4>{obj.news.arr[2].h4}</h4>
                    <h3>{obj.news.arr[2].h3}</h3>
                    </li>

            </ul>
            
            </div>
</div>
            </div>
        )
    })
    
    return (
       <div>{resp}</div>
    
    )
}
export default News;






