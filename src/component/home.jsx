
import React, { Component } from "react";
import AOS from "aos";

const Home = (b) => {
    AOS.init()
    console.log(b);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            
<div className="home">
<img src={obj.home.img} />
<div className="cover">
<div className="text"> 
<h1 data-aos="slide-left" data-aos-duration="1000" data-aos-delay="ease">{obj.home.heading}</h1> 
    <h2 data-aos="slide-right" data-aos-duration="1000" data-aos-delay="ease">{obj.home.paragraph}</h2>
    <span>
    <input type="text" placeholder={obj.home.in1} className="in1"/>
    <input type="text" placeholder={obj.home.city} src={obj.home.img1}/>
{/* <img src={obj.home.img1} className="img1" /> */}
<button className="b1">{obj.home.search}</button>
    </span>
    <span>
<p>{obj.home.span}</p> 
<button className="b2">{obj.home.b1}</button>
<button className="b2">{obj.home.b2}</button>
<button className="b2">{obj.home.b3}</button>
<button className="b2">{obj.home.b4}</button>
</span>
</div> 

</div>
</div>
            </div>
        )
    })
    
    return (
        
       <div>{resp}</div>
    
    )
}
export default Home;






