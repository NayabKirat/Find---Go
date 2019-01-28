
import React, { Component } from "react";

const Visite = (b) => {
    console.log(b);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            <div className="visite">
            <div className="visite-container">
            <h1>{obj.visite.h1}</h1>
            <p>{obj.visite.p}</p>
            <ul>
                <li>
	<div className="placethumb">
    	<img src={obj.visite.arr[0].img} alt="" />
			<div className="placeoptions">
				<span className="pull-left">{obj.visite.arr[0].s1} <i className="far fa-eye"></i></span>
		<span className="pull-right"> {obj.visite.arr[0].s2}<i className="far fa-heart"></i></span>
			</div>
				</div>
                	<div class="placeinfos">
		<h2>{obj.visite.arr[0].h2}</h2>
			<p>{obj.visite.arr[0].p}</p>
		
            <span><span class="rated">{obj.visite.arr[0].r1}</span>{obj.visite.arr[0].r2}
	<span><i className="fas fa-cookie-bite"></i>{obj.visite.arr[0].r3}</span>`
							{obj.visite.arr[0].r4}</span>
				
	</div>
		<div class="placedetails">
	<span class="pull-left"><i className="fas fa-map-marker-alt"></i>{obj.visite.arr[0].place1}</span>
		<span class="pull-rights"><i className="fas fa-phone"></i>+ 44 20 456 823{obj.visite.arr[0].place2}</span>
				</div>
		
      </li>
      <li>
	<div className="placethumb">
    	<img src={obj.visite.arr[1].img} alt="" />
			<div className="placeoptions">
				<span className="pull-left">{obj.visite.arr[0].s1} <i className="far fa-eye"></i></span>
		<span className="pull-right"> {obj.visite.arr[0].s2}<i className="far fa-heart"></i></span>
			</div>
				</div>
                	<div class="placeinfos">
		<h2>{obj.visite.arr[1].h2}</h2>
			<p>{obj.visite.arr[0].p}</p>
		
            <span><span class="rated">{obj.visite.arr[0].r1}</span>{obj.visite.arr[0].r2}
	<span><i className="fas fa-cookie-bite"></i>{obj.visite.arr[0].r3}</span>`
							{obj.visite.arr[0].r4}</span>
				
	</div>
		<div class="placedetails">
	<span class="pull-left"><i className="fas fa-map-marker-alt"></i>{obj.visite.arr[0].place1}</span>
		<span class="pull-rights"><i className="fas fa-phone"></i>+ 44 20 456 823{obj.visite.arr[0].place2}</span>
				</div>
		
      </li>     <li>
	<div className="placethumb">
    	<img src={obj.visite.arr[2].img} alt="" />
			<div className="placeoptions">
				<span className="pull-left">{obj.visite.arr[0].s1} <i className="far fa-eye"></i></span>
		<span className="pull-right"> {obj.visite.arr[0].s2}<i className="far fa-heart"></i></span>
			</div>
				</div>
                	<div class="placeinfos">
		<h2>{obj.visite.arr[2].h2}</h2>
			<p>{obj.visite.arr[0].p}</p>
		
            <span><span class="rated">{obj.visite.arr[0].r1}</span>{obj.visite.arr[0].r2}
	<span><i className="fas fa-cookie-bite"></i>{obj.visite.arr[0].r3}</span>`
							{obj.visite.arr[0].r4}</span>
				
	</div>
		<div class="placedetails">
	<span class="pull-left"><i className="fas fa-map-marker-alt"></i>{obj.visite.arr[0].place1}</span>
		<span class="pull-rights"><i className="fas fa-phone"></i>+ 44 20 456 823{obj.visite.arr[0].place2}</span>
				</div>
		
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
export default Visite;






