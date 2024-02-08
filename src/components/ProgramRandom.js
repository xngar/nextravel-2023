import React, { useState, useEffect } from 'react';
import { CurrencySeleted } from '../utils/helpers';
import { CircleLoader } from 'react-spinners';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
});

 const  ProgramsViews =({Items, change}) =>{
    const [randomItems, setRandomItems] = useState([]);

    useEffect(() => {
        if (!Items.isLoading && Items.data) {
            // Barajar aleatoriamente la lista de items
            const shuffledItems = Items.data.sort(() => Math.random() - 0.5);
            // Seleccionar los primeros 6 objetos de la lista barajada
            const selectedItems = shuffledItems.slice(0, 6);
            setRandomItems(selectedItems);
        }
    }, [Items]);


     const uri = document.location.origin;
        
     return (<><div className="container">
                   
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="section-title text-center">
                                <h1><i className="fa fa-earth-asia"></i><span className="letraCapital"> P</span>rogramas Visitados</h1>
                              
                            </div>
                        </div>
                    </div>

                    <div className="row">
                      
                              {Items.isLoading ? <CircleLoader size={100} color="#d3761b"/> : 
                              randomItems.map((item, i) => {
                              
                              return (<>
                                <div key={i} className="col-xs-6 col-sm-6 col-md-4 wow fadeInUp">
                                    <div className="package-list">
                                        <a href={`${uri}/Programa/` + item.Id}>
                                            <div className="package-thumb">
                                                <img className="img-fluid-programa imagen-progama-list" src={ process.env.REACT_APP_TURISCLUB_PATH_MEDIA + item.Imagen} alt={item.Titulo} width="360" height="240" />
                                                <div className="duration">
                                                    {item.Dias} días<br />{item.Noches} noches
                                                </div>
                                            </div>
                                            <div className="package-info">
                                                <h3>{item.Titulo}</h3>
                                                <p>{item.Descripcion}</p>
                                                <span className="pull-left">
                                                    <span className="review-count"><sup> {item.PrecioTxt}</sup></span>
                                                </span>
                                                <span className="pull-right price">{formatter.format(item.PrecioUsd).replace("$", `${CurrencySeleted()} `).replace(",", ".").replace("CLP", "$")}</span>
                                                <p>precio equivalente en pesos chilenos: {formatter.format((item.PrecioUsd * change.data?.CambioContado)).replace(",", ".").replace(",", ".")}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                </> )
                             }) }



                    </div>
                </div>
            
            </>);
        }

export default ProgramsViews;