import './filme-info.css';
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import iconLoading from '../../img/loading.gif';
import { toast } from 'react-toastify';

export default function Filme(){

    const { id } = useParams();
    const history = useNavigate();
    const [filme, setFilme] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFilme(){

            const response = await api.get(`r-api/?api=filmes/${id}`);
            
            if(response.data.length === 0){
                history('/');
                return;
            }

            setFilme(response.data);
            setLoading(false);

        }

        loadFilme();

        return () => {
            // É executado sempre que o componente é desmontado, ou seja, ao sair do componente.
        }

    }, [history, id]);

    function salvaFilme() {
        
        const minhaLista = localStorage.getItem('filmes');

        let filmesSalvos = JSON.parse(minhaLista) || [];

        // Verifica replicar filme salvo
        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id )
        if(hasFilme){
            toast.info('Filme já estava salvo');
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso');

    }

    if(loading){
        return(
            <div className='filme-info'>
                <img src={iconLoading} alt="Loading" className='loading'/>
            </div>
        );
    }

    return(
        <div className='filme-info'>
            <h1> {filme.nome} </h1>
            <img src={filme.foto} alt={filme.nome} />
            <h3>Sinopse</h3>
            {filme.sinopse}
            
            <div className='botoes'>
                <button onClick={ salvaFilme }>Salvar</button>
                <button>
                    <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    );

}