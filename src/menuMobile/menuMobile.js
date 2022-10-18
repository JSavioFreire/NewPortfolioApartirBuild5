import './menuMobile.css'
import { BiMenu , BiBookBookmark} from 'react-icons/bi';
import { AiOutlineHome, AiFillDatabase } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { TiMediaRewindOutline } from 'react-icons/ti';
import {useEffect, useState} from 'react';

export default function MenuMobile(){
    const [menuMobile, setMenuMobile] = useState(false);

    useEffect(()=>{
        const men = ()=>{
            if(window.scrollY>200){
                setMenuMobile(true);
            }
            else{
                setMenuMobile(false)
            }
        }
        window.addEventListener('scroll', men)
    })
    const menuLateral = document.querySelector('.menu')      
    const clicouMenu = ()=>{
        menuLateral.classList.add('apareceMenuLateral')

            document.addEventListener('click',()=>{
            menuLateral.classList.remove('apareceMenuLateral')
       }, true); 
        
    }

    
    return(
        <div className={menuMobile ? ' ' : 'display'}>
            <div className ={menuMobile ? 'menuMobile' : ' '}>
                <div className='btMenu' onClick={clicouMenu}>
                    <BiMenu/>
                </div>
                
            </div>
            <div className='menu'>
                <ul>
                    <li><a href="#inicio"><AiOutlineHome/>Home</a></li>
                    <li><a href="#quemSou"><BiBookBookmark/>Sobre</a></li>
                    <li><a href="#linhaTempo"><TiMediaRewindOutline/>Linha do Tempo</a></li>
                    <li><a href="#portfolio"><AiFillDatabase/>Portfólio</a></li>
                    <li><a href="#contato"><BsTelephone/>Contato</a></li>
                </ul>
            </div>
        </div>
    )
    }
