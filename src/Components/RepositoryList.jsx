import { useState, useEffect  } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';




const repository = {
    name: 'Formulario de Github',
    description: 'repository example',
    url: 'https://github.com/Jrevoredo42'
}

export function RepositoryList (){

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
       fetch('https://api.github.com/users/Jrevoredo42/repos')
       .then(response => response.json())
       .then(data => console.log(data))
    }, [])


    return(
        <section className='repository-List'>
            <h1>Lista de Repositorios</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    )
}