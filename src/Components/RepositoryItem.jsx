export function RepositoryItem (props){
    return(
        <li>
            <strong><p>{props.repository?.name}</p></strong>
            <br/>

            <a href={props.repository?.html_url}>
                Acessar repositorio
            </a>
        </li>
    );
}