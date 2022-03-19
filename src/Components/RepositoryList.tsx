import { useState, useEffect  } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

/* Interface necessaria para declarar tipagem no state, permitindo tanto a realização da API,
 como também a declaração dos props do component RepositoryList*/

interface Repository {
    name: string;
    description: string;
    html_url: string;
}


export function RepositoryList (){

    /*State de repositorio pra utilizar na chamada da API, tendo um array com a tipagem da interface Repository 
    vazio  como valor inicial*/

    const [repositories, setRepositories] = useState<Repository[]>([]);

    /*Hook useEffect, utilizado para fazer a chamada da API,
    converter a resposta num json e pegar seus dados para o state de repositorio (array de repositorios)*/

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
                   return <RepositoryItem key={repository.name} repository={repository} />
               })}
            </ul>
        </section>
    )
}