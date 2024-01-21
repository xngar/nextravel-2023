import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { getSlider} from './api/Apis';
import "./Slider.css";
const Slider = (token) => {
console.log('Token recibido: ', token.token)
    const slider = useQuery({
        queryKey:['slider'],
        queryFn: () => getSlider(token.token)   
     });

console.log('Sliders: ', slider.data);


    return (<>
      <div id="banner" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">

<div className="carousel-inner" role="listbox">
    {slider.data?.map((item, i) => {
        return <div key={i} className={i === 0 ? 'item active' : 'item'} style={{ backgroundImage: item.Nomenclador === "" ? `url("/upload/${item.Src}")` : `url("${process.env.REACT_APP_TURISCLUB_PATH_MEDIA}${item.Src}")`, cursor: 'pointer' }}>
            <div className="caption-info">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-md-offset-2">
                            <div className="caption-info-inner text-center">
                                <h1 className={"animated " + (i % 2 ? "fadeInDown" : "zoomIn")}>{item.Titulo}</h1>
                                {item.ProgramaPrecioTxt === null ? <p></p> : <p className={"animated " + (i % 2 ? "fadeInUp" : "zoomIn")}>{item.ProgramaPrecioTxt}<span className="span-price"> {item.ProgramaPrecioUSD}</span></p>
                                    
}
                                <a href="#" className={"animated " + (i % 2 ? "fadeInUp" : "zoomIn") + " btn btn-primary page-scroll"}>Ver más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    })}

</div>
<a className="control left" href="#banner" data-slide="prev"><i className="fa fa-long-arrow-left"></i></a>
<a className="right control" href="#banner" data-slide="next"><i className="fa fa-long-arrow-right"></i></a>
</div>
    </>)
}

export default Slider