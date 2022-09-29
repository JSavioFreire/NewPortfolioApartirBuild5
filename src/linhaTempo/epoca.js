import './epoca.css'
import { BsArrowDownShort } from 'react-icons/bs';


export default function Epoca(props){

    
    

    return(
        
            <div className={props.class}>
                <div className='text'>
                    <h3>{props.ano}</h3>
                    <p>{props.sobre}</p>
                </div>
                <div className='bola'>
                    <div className='gradient'>
                        <BsArrowDownShort/>
                    </div>
                </div>
                <div className='img'>
                    <img src={props.img} />

                </div>
            </div>
    )
}