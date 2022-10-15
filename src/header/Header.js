import './header.css'
import '../gradient/gradient.css'

import { AiFillGithub,AiFillLinkedin,AiOutlineInstagram,AiOutlineWhatsApp } from 'react-icons/ai';
import {RiArrowDownSLine} from 'react-icons/ri'
import {FiMail} from 'react-icons/fi'
import { useEffect } from 'react';


export default function Header(){

    useEffect(()=>{
        const icon = document.querySelectorAll('.header .icons svg');
        const iconDiv = document.querySelectorAll('.header .icons > div > p')
        
        icon.forEach((el,index) => {
          
        icon[index].addEventListener('mouseover',()=>{
            iconDiv[index].classList.add('apareceP');            
    })
        icon[index].addEventListener('mouseout',()=>{
            iconDiv[index].classList.remove('apareceP')
    })  
        });
          
})
    
    


    return(
        <div className='header' id='header'>
            <div className='gradient'>
                <div className='center'>
                    <div className="nome">
                        <h1>Sávio Freire</h1>
                        <p>Desenvolvedor Front-End</p>
                    </div>
                    <div className= 'icons'>
                        <div>
                            <a href="https://github.com/JSavioFreire" target="_blank"><AiFillGithub/></a>
                            <p>JSavioFreire</p>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/s%C3%A1vio-freire-263198244/" target="_blank"><AiFillLinkedin/></a>
                            <p>Sávio Freire</p>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/freiresavio7/" target="_blank"><AiOutlineInstagram/></a>
                            <p>freiresavio7</p>
                        </div>
                        <div>
                            <a href="https://api.whatsapp.com/send?phone=5521968212882" target="_blank"><AiOutlineWhatsApp/></a>
                            <p>(21)968212882</p>
                        </div>
                        <div>
                            <a href="mailto:freiresavio7@gmail.com" target="_blank"><FiMail/></a>
                            <p>freiresavio7@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='setaHeader'>
                    <RiArrowDownSLine/>
                </div>
            </div>
        </div> 
    )
}