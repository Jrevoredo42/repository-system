import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'Formulario de Github',
    description: 'repository example',
    url: 'https://github.com/Jrevoredo42'
}

export function RepositoryList (){
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