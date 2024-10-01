import style from './Css/botao.module.css'

function Botao(){
    return(
        <div className={style}>
             <button type="submit">Entrar</button>
        </div>
    )
}

export default Botao;