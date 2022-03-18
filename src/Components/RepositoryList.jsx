import { useState, useEffect  } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';


export function RepositoryList (){

    //State de repositorio pra utilizar na chamada da API, tendo um array vazio como valor inicial
    const [repositories, setRepositories] = useState([]);

    /*Hook useEffect, utilizado para fazer a chamada da api,
    converter a resposta num json, e pegar seus dados para o state de repositorio (array de repositorios)*/
    useEffect(() => {
       fetch('https://api.github.com/users/Jrevoredo42/repos')
       .then(response => response.json())
       .then(data => setRepositories(data))
    }, [])

    /*Sessão com lista de repositorios, que utiliza a função Map pra percorrer os valores de repositorio
    e retorna-los dentro do component RepositoryItem  */
    return(
        <section className='repository-List'>
            <h1>Lista de Repositorios</h1>
            <ul>
               {repositories.map(repository => {
                   return <RepositoryItem repository={repository} />
               })}
            </ul>
        </section>
    )
}