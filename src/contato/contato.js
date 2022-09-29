import './contato.css'
import { AiFillGithub,AiFillLinkedin,AiOutlineInstagram,AiOutlineWhatsApp } from 'react-icons/ai';
import {FiMail} from 'react-icons/fi'

export default function Contato(){

    return(
        <div className='contato' id='contato'>
            <div><h1>Minhas Redes</h1></div>
            <div className='redes'>
            <div><a href="https://github.com/JSavioFreire" target="_blank"><AiFillGithub/></a></div>
            <div><a href="https://www.linkedin.com/in/s%C3%A1vio-freire-263198244/" target="_blank"><AiFillLinkedin/></a></div>
            <div><a href="https://www.instagram.com/freiresavio7/" target="_blank"><AiOutlineInstagram/></a></div>
            <div><a href="https://api.whatsapp.com/send?phone=5521968212882" target="_blank"><AiOutlineWhatsApp/></a></div>
            <div><a href="mailto:freiresavio7@gmail.com" target="_blank"><FiMail/></a></div>

            </div>
            <div className='direitos'>
                <p>Todos os direitos reservados!</p>
            </div>
        </div>
    )
}