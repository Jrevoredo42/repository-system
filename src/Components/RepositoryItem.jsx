export function RepositoryItem (props){
    return(
        <li>
            <strong><p>{props.repository?.name ?? 'default'}</p></strong>
            <br/>

            <a href={props.repository?.url}>
                Acessar repositorio
            </a>
        </li>
    );
}