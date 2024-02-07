import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import { Menu } from '../components/Menu';
import Footer from '../components/Footer';
import { useQuery } from '@tanstack/react-query';
import { getProgramDetail, getHotel,getCategoryHotel } from '../components/api/Apis';
import { CurrencySeleted, isHotelColumn } from '../utils/helpers';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
});

export const Programa =()=>{

    let {IdPrograma} = useParams();
    let currency = CurrencySeleted();
const programDetail = useQuery({
   queryKey:['detail'],
   queryFn: ()=> getProgramDetail(IdPrograma, currency)
});


const HeaderProgram = ({program}) => {
   
      return <div className="row">

      <div className="container">
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="content-block">
                      <div className="single_post"  >
                          <div className="post_thumb">
                              <img src={program?.Activo == true ? process.env.REACT_APP_TURISCLUB_PATH_MEDIA + program?.Imagen : "/upload/" + program?.Imagen} alt="" />
                          </div>
                            <div className="post_desc">
                              <div className="meta">
                                  <h2>{program?.Titulo} <sub>ID: { program?.Id}</sub></h2>
                                  <p>proveedor: TC</p>
                                  <h4>{program?.SubTitulo}</h4>
                                  <p className="text-muted">{program?.PrecioTxt}</p>
                                  <h1 className="text-center price-detail"> {formatter.format(program?.PrecioUsd).replace(",", ".").replace('$', CurrencySeleted())}</h1>
                                  <span className="tour-duration"><a href="#"><b>{program?.Dias + " días / " + program?.Noches + " noches"}</b></a></span>

                                  {/*<span className="date"><a href="#">14 March 2016</a></span>*/}
                              </div>
                        </div>
                     </div>
                 </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <ul className="listadoPro">
                      {program?.Incluye.map((item, i) => {
                          return <li key={i} style={{ lineHeight: '2' }}><i className="fa fa-check-circle-o"></i>&nbsp;{item?.TextoIncluye}</li>
                      })}

                </ul>
             </div>
           </div>
        </div>
    </div>
};



const TituloBloqueos = ({ SetSalidaVencida, children }) => {
    const [salidaVencida, setSalidaVencida] = useState(false);
    const tituloSplit = children.toString().split(' ');

    return (<>
        {
            tituloSplit.map((piece, index) => {
                if (piece.startsWith("*")) {
                    SetSalidaVencida(true);
                    return <span key={index} style={{ color: "red", textDecorationLine: "line-through" }}>{piece.substr(1)} </span>
                } else {
                    return <span key={index}>{piece} </span>
                }
            })
        }
    </>);
}
const EspaciosConfirmados = ({bloqueos}) => {
  
    const [salidaVencida, setSalidaVencida] = useState(false);

    return(<>

          {bloqueos?.map((bloqueo, index)=>{
           return(<React.Fragment key={index}>
                <div>
                <table>
            <thead>
            <tr>
                 <th colSpan={4} className="text-center" style={{fontSize:'12px'} }>
                <TituloBloqueos SetSalidaVencida={setSalidaVencida}>{bloqueo.TextoFecha}</TituloBloqueos>
                 </th>
            </tr>
                <tr>
                <th style={{border:'1px solid black'}}>Vuelo</th>
                <th style={{border:'1px solid black'}}>Ruta</th>
                <th style={{border:'1px solid black'}}>Sale</th>
                <th style={{border:'1px solid black'}}>Llega</th>
                </tr>
            </thead>
            <tbody>
                {
                    bloqueo.Detalle?.sort((a,b)=> a.Correlativo - b.Correlativo).map((detalle, i)=> {
                        return(
                            <tr key={index + i}>
                            <td style={{border:'1px solid black'}}>{detalle.Vuelo}</td>
                            <td style={{border:'1px solid black'}}>{detalle.Ruta}</td>
                            <td style={{border:'1px solid black'}}>{detalle.Sale}</td>
                            <td style={{border:'1px solid black'}}>{detalle.Llega}</td>
                        </tr>
                        )
                    })
                }
                <tr>

                </tr>
            </tbody>
           </table>
            {
                <div className="col-lg-12 col-md-12 col-xs-12">
                <div>
                    <div>
                        {salidaVencida ? <span className="" style={{ color: "red", fontSize: "13px", textAlign: 'center' }}>(-) Salida totalmente vendida</span> : null}
                    </div>
                </div> 
            </div>  
            }
                </div>
           </React.Fragment>);
           })}
           
    </>);

}
            
  // ToolTip
  
const ToolTip =({valor, text})=>{

        if (!valor || !text) {
            return <></>
        }
        return <>
            {/* <ReactBootstrap.OverlayTrigger overlay={<ReactBootstrap.Tooltip id="button-tooltip">{text}</ReactBootstrap.Tooltip>}>
                <span style={{ fontSize: 10, verticalAlign: "text-bottom" }} className="fa-stack"><span className="fa fa-circle-thin fa-stack-2x"></span><strong className="fa-stack-1x">{valor}</strong></span>
            </ReactBootstrap.OverlayTrigger> */}
        </>
    
}




        //return of the program
    return(<>
           <Menu/>
        <div>
            <HeaderProgram program={programDetail.data}/>
            <br></br>
            <EspaciosConfirmados bloqueos={programDetail.data?.Bloqueos.filter(c=>c.Activo)}/>
            <br></br>
            {/* <HotelProgramaDetalleCard items={programDetail.data?.Hoteles} encabezado={programDetail.data?.Categorias} comments={programDetail.data?.Observaciones}/> */}
        </div>
         <Footer/>
    </>);

function getColumnValue(item, encabezado) {

    console.log('Get Column Value: ', item)
    let columnValue = '';

    let columna = item.items.findIndex(item.items, u => u.IdColumna == encabezado.IdColumna);
    if (!columna) {
        return columnValue;
    }

    columnValue = columna.ValorColumna;

    if (isHotelColumn(encabezado)) {
        let hotel = 'hotel';
        if (hotel) {
            columnValue = hotel.Hotel;
        }
    }

    if (columnValue == "0") {
        columnValue = 'FREE';
    } else if (columnValue === null) {
        columnValue = '-';
    }

    return columnValue;
}

function getComentarioNro(item, encabezado, comentarios) {
    let columnValue = 0;

    let columna = item.items.find((a,b)  => a.IdColumna == b.IdColumna);
    if (!columna) {
        return columnValue;
    }

    columnValue = parseInt(columna.Comentario || '0');

    if (comentarios && comentarios.some(c => c.Correlativo == columnValue)) {
        let currentOrden = comentarios.first(c => c.Correlativo == columnValue).Orden;
        if (currentOrden) {
            columnValue = currentOrden;
        }
    }

    return columnValue;
}

function getComentario(item, encabezado, comentarios) {
    let columnValue = '';

    let columna = item.items.find( u => u.IdColumna == encabezado.IdColumna);
    if (!columna) {
        return columnValue;
    }

    let codigoComentario = parseInt(columna.Comentario || '0');
    if (comentarios.some(c => c.Correlativo == codigoComentario)) {
        columnValue = comentarios.first( c => c.Correlativo == codigoComentario).TextoIncluye;
    }

    return columnValue;
}

    // 13-04-2020 | 30-04-2020  => 20200413
    function getYYYYMMDD(vigencia) {
        if (vigencia.indexOf('|') < 0) {
            return vigencia
        }
        let dateFrom = vigencia.split('|')[0].trim();
        let dateFromSplit = dateFrom.split('-');
        return `${dateFromSplit[2]}${dateFromSplit[1]}${dateFromSplit[0]}`;
    }
}