import './quemSou.css'
import minhaFoto from '../foto/foto.jpg'

export default function QuemSou(){

    return(
        <div className='quemSou' id='quemSou'>
            <h1>Olá!</h1>
            <div className='flex'>
                <div className='sobre'>
                
                    <p>Meu nome é Sávio Freire, tenho 23 anos, sou casado e sou um amante de tecnologia. Gosto muito de me desafiar, e como um nerdola nato, sempre gostei de quebra-cabeças e jogo difíceis, acredito que seja por isso que me apaixonei pela programação; Como em um game por exemplo, são nas áreas mais complicadas e desafiadoras que encontramos as maiores recompensas, e pra mim, nada é mais recompensador do que ver o meu site bonitão, meu código lindo e tudo funcionando corretamente. Acredito muito no meu trabalho, e posso garantir que vou dar o meu melhor nessa área que tanto amo. Estou cursando Análise e Desenvolvimento de Sistemas na Universidade Estácio de Sá e estou buscando novos desafios e adquirir experiência na área de desenvolvimento Front-end.</p>
                </div>
                <div className='foto'>
                    <img src={minhaFoto}/>
                </div>
            </div>
        </div>
    )
}