import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getProgramList } from '../components/api/Apis';
import { CurrencySeleted } from '../utils/helpers';
import { HashLoader } from 'react-spinners';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
});


export const Programas = () => {

    const {IdArea, Id} = useParams();

    const programs = useQuery({
        queryKey:['programs'],
        queryFn: ()=> getProgramList(IdArea, Id, 'USD')
    })
     console.log('Entities: ', programs.data)
    return(<> {programs.isLoading ?
             <HashLoader
            color={'#d3761b'}
            loading={programs.isLoading}
            size={70}
            aria-label="Loading Spinner"
            data-testid="loader"
            style={{ float: 'center' }}
  
          /> : 
            programs.data?.map((item, i)=>{
                      
                return <>
                      <div key={i} className="col-xs-6 col-sm-6 col-md-4 wow fadeInUp">
                                    <div className="package-list">
                                        <a href={'/programa/' + item.Id}>
                                            <div className="package-thumb">
                                                <img className="img-fluid-programa imagen-progama-list" src={item.Nomenclador === "" ? "/upload/" + item.Imagen : "https://turisclub.cl/upload/" + item.Imagen} alt={item.Titulo} width="360" height="240" />
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
                                            </div>
                                        </a>
                                    </div>
                                </div> </>
            })
        }
    </>);
}