import './linhaTempo.css';
import '../gradient/gradient.css';
import './epoca.css'

import { useEffect, useState } from 'react';

import { BsFlower3 } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineLaptop } from 'react-icons/ai';
import { GiHeartTower } from 'react-icons/gi';
import { RiPagesLine } from 'react-icons/ri';

import MiniEpoca from './miniEpoca';
import Epoca from './epoca';
import loja from '../foto/loja.jpeg'
import ingles from '../foto/ingles.jpg'
import estacio from '../foto/estacio.jpg'
import front from '../foto/front.png'
import htmlCss from '../foto/htmlCss.jpg'
import js from '../foto/javascript.png'
import react from '../foto/react.jpg'
import convertido from '../foto/convertido.jpg'
import casei from '../foto/casei.jpg'
import danki from '../foto/danki.png'
import mae from '../foto/mae.jpg'
import primeiroP from '../foto/primeiroP.png'
import sp from '../foto/2p.png'
import workana from '../foto/workana.png'

export default function LinhaTempo(){

    const [aparecerLinhaTempo, setAparecerLinhaTempo] = useState(false);

    useEffect(()=>{
        const posicao = ()=>{
            if(window.scrollY>650){
                setAparecerLinhaTempo(true);
            }
            else{
                setAparecerLinhaTempo(false)
            }
        }
        window.addEventListener('scroll', posicao)
    })

    return(
        <div className='linhaTempo'>
            <div className={aparecerLinhaTempo ? 'linha' : 'linhaApagada'}>
                
            </div>
            <Epoca class={aparecerLinhaTempo ? 'epoca' : 'sumidoEpoca'} ano='Jan/2011' sobre='Minha vida profissional começou cedo, com 13 anos eu comecei a trabalhar na loja de bicicletas do meu pai.' img={loja}/>

            <Epoca class={aparecerLinhaTempo ? 'epoca2' : 'sumidoEpoca2'} ano='Jan/2017' sobre='Comecei o curso de Inglês no Cultura Inglesa. Aprendi uma boa base da lingua.' img={ingles}/>    

                <MiniEpoca icons=<GiHeartTower/> titulo='Conheci a Deus' sobre='Mudei muito após esse acontecimento, passei a confiar mais em mim, entendi a importância de ajudar o próximo, me tornei um homem mais focado, determinado e confiante.' img={convertido}/>
            <div className='divisor'></div>

                <MiniEpoca icons=<AiFillHeart/> titulo='Meu Maior Amor' sobre='Conheci o amor da minha vida, a pessoa que mais me incentiva a continuar e sempre olhar para frente. A minha parceira que está comigo em tudo e que eu amo muito.' img={casei}/>
            <div className='divisor'></div>

                <MiniEpoca icons=<BsFlower3/> titulo='A minha Maior perca' sobre='Passei pela maior dificuldade da minha vida quando perdi a minha mãe, eu tive a melhor mãe desse mundo. O que me conforta é saber que ela está em um lugar incrivel agora.' img={mae} />

            <Epoca class={aparecerLinhaTempo ? 'epoca' : 'sumidoEpoca'} ano='Mar/2022' sobre='Comecei a faculdade de Análise e Desenvolvimento de Sistemas na Universidade Estácio de Sá. ' img={estacio}/>
            <Epoca class={aparecerLinhaTempo ? 'epoca2' : 'sumidoEpoca2'} ano='Mai/2022' sobre='Decidi que queria me especializar na área de Desenvolvimento Front-End.' img={front}/>

                <MiniEpoca icons=<AiOutlineLaptop/> titulo='Os Cursos da DankiCode' sobre='Conheci a plataforma de ensino DankiCode, os cursos dele me ajudaram muito nesse mundo da programação.' img={danki} />

            <Epoca class={aparecerLinhaTempo ? 'epoca' : 'sumidoEpoca'} ano='Jun/2022' sobre='Aprendi HTML e CSS nas aulas do do Curso em Vídeo e no curso de Front-End na DankiCode' img={htmlCss}/>
            
                <MiniEpoca icons=<RiPagesLine/> titulo='Criei meu Primeiro Site' sobre='Criei um Portfólio simples, foi a minha primeira experiência de criar um site do zero sozinho.' img={primeiroP} link=<a href='https://jsaviofreire.github.io/Portfolio_em_producao/' target='_blank' >https://jsaviofreire.github.io/Portfolio_em_producao/</a> />
            

            <Epoca class={aparecerLinhaTempo ? 'epoca2' : 'sumidoEpoca2'} ano='Ago/2022' sobre='Aprendi JavaScript com o curso de JavaScript Puro da DankiCode' img={js}/>

                <MiniEpoca icons=<RiPagesLine/> titulo='Criei meu Segundo Site' sobre='Comecei a aprender um pouco mais e decidi criar um novo portfólio' img={sp} link=<a href='https://jsaviofreire.github.io/portfolio/' target='_blank' >https://jsaviofreire.github.io/portfolio/</a> />

            <Epoca class={aparecerLinhaTempo ? 'epoca' : 'sumidoEpoca'} ano='Set/2022' sobre='Foi amor a primeira vista quando comecei a aprender ReactJs, realizei o curso de ReactJs da DankiCode' img={react}/>

                <MiniEpoca icons=<AiOutlineLaptop/> titulo='Trabalhos Freelancer' sobre='Criei minha conta no Workana e conseguir alguns trabalhos por lá, adquiri muita experiência nesses projetinhos.' img={workana} />
            
            
            
        </div>
    )
}