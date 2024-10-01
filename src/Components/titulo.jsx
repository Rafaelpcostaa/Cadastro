import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from  './Css/titulo.module.css'

function Titulo({Icone}){
    return(
        <div class={style.titulo}>
                <h1>Login Admin</h1>
                <span class="icon-2">
                <FontAwesomeIcon icon={Icone} size="3x" />
                </span>
            </div>
    )
}

export default Titulo;