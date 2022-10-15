import './miniEpoca.css'
import '../gradient/gradient.css'
import { useState } from 'react';


export default function MiniEpoca(props){

    const [modal,setModal] = useState(false)

    const setarTrue = ()=>{
        setModal(true)
        
    }
    const setarFalse = ()=>{
        setModal(false)
        

    }




if(modal==false){
    return(
        <div className='MEMenor'>
            <div className='bolinha' onClick={setarTrue}>
                {props.icons}
            </div>
        </div>     
        
    )
}
else if(modal==true){
    return(
        <div className='ME'>
            <div className='modal' onClick={setarFalse}>
                <div className='janelaModal'>
                    <div className='MEEscrito'>
                        <h1 className='METitulo'>{props.titulo}</h1>
                        <p className='MESobre'>{props.sobre} </p>
                        <p className='MELink'>{props.link}</p>
                    </div>
                    <div className='MEFoto'>
                        <img src={props.img}/>
                    </div>
                </div>
            </div>
        </div>
    )
}



   

    
}