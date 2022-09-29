import './linhaTempo.css';
import '../gradient/gradient.css';
import './epoca.css'

import { useEffect, useState } from 'react';

import MiniEpoca from './miniEpoca';
import Epoca from './epoca';
import loja from '../foto/loja.jpeg'
import ingles from '../foto/ingles.jpg'
import estacio from '../foto/estacio.jpg'
import front from '../foto/front.png'
import htmlCss from '../foto/htmlCss.jpg'
import js from '../foto/javascript.png'
import react from '../foto/react.jpg'
import gta from '../foto/gta5.jpg'
import convertido from '../foto/convertido.jpg'
import conheci from '../foto/conheciAna.jpg'
import danki from '../foto/danki.png'

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

            <MiniEpoca class='Gta5'/>

            <Epoca class={aparecerLinhaTempo ? 'epoca2' : 'sumidoEpoca2'} ano='Jan/2017' sobre='Comecei o curso de Inglês no Cultura Inglesa. Aprendi uma boa base da lingua.' img={ingles}/>    

            <MiniEpoca class='conversao'/>
            <MiniEpoca class='casamento' />
            <MiniEpoca class='mae' />

            <Epoca class={aparecerLinhaTempo ? 'epoca' : 'sumidoEpoca'} ano='Mar/2022' sobre='Comecei a faculdade de Análise e Desenvolvimento de Sistemas na Universidade Estácio de Sá. ' img={estacio}/>
            <Epoca class={aparecerLinhaTempo ? 'epoca2' : 'sumidoEpoca2'} ano='Mai/2022' sobre='Decidi que queria me especializar na área de Desenvolvimento Front-End.' img={front}/>

            <MiniEpoca class='danki' />

            <Epoca class={aparecerLinhaTempo ? 'epoca' : 'sumidoEpoca'} ano='Jun/2022' sobre='Aprendi HTML e CSS nas aulas do do Curso em Vídeo e no curso de Front-End na DankiCode' img={htmlCss}/>
            
            <MiniEpoca class='primeiroPortfolio' />
            

            <Epoca class={aparecerLinhaTempo ? 'epoca2' : 'sumidoEpoca2'} ano='Ago/2022' sobre='Aprendi JavaScript com o curso de JavaScript Puro da DankiCode' img={js}/>

            <MiniEpoca class='certificadoJs' />

            <Epoca class={aparecerLinhaTempo ? 'epoca' : 'sumidoEpoca'} ano='Set/2022' sobre='Foi amor a primeira vista quando comecei a aprender ReactJs, realizei o curso de ReactJs da DankiCode' img={react}/>

            <MiniEpoca class='certificadoReact' />
            
            
            
        </div>
    )
}