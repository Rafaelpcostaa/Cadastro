import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Css/input.module.css';

function Input({ nome, tipo, Icone }) {
  const [valor, setValor] = useState('');

  return (
      <div className={style.caixa_input}>
        <span className={style.icon}>
          <FontAwesomeIcon icon={Icone} />
        </span>
        <input type={tipo} value={valor} onChange={(e) => setValor(e.target.value)} required/>
        <label htmlFor="">{nome}</label>
      </div>
  );
}

export default Input;