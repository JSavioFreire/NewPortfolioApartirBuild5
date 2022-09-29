import './menu.css'
import {useEffect, useState} from 'react'

export default function Menu(){
    const [ativar, setAtivar] = useState(false);

    useEffect(()=>{
        const posicao = ()=>{
            if(window.scrollY>200){
                setAtivar(true);
            }
            else{
                setAtivar(false)
            }
        }
        window.addEventListener('scroll', posicao)
    })

    return(
        <div className={ativar ? 'ativar' : 'desativo' }>
            <div className='left'>
                <h1>Sávio Freire</h1>
                <p>Desenvolvedor Front-End</p>
            </div>
            <div className='right'>
                <ul>
                    <li><a href="#inicio">Home</a></li>
                    <li><a href="#quemSou">Sobre</a></li>
                    <li><a href="#linhaTempo">Linha do Tempo</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </div>
        </div>
    )
}