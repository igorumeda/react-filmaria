import './notfound.css';
import { Link } from 'react-router-dom';

export default function Notfound(){
    return(

        <div className='error-container'>

            <img src="https://cdn-icons.flaticon.com/png/512/3253/premium/3253156.png?token=exp=1641574113~hmac=79c05c9f46172b84d00de191a5bd6e8f" alt="Error" />
            <h2>Página não encontrada</h2>
            <Link to={'/'}>Voltar para a página inicial</Link>

        </div>
        
    );
}