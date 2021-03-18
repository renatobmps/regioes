import React from 'react';
import { AiOutlineLink } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Tabela({ campos, itens, link, prefixo }) {
  return (
    <table>
      <thead>
        <tr>
          {
            campos.map(coluna => {
              return <th key={coluna.id}>{coluna.nome}</th>
            })
          }
          <th>Links</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={campos.length}>Completo</td>
          <td><Link to="completo"><AiOutlineLink /></Link></td>
        </tr>
        {
          itens.map(linha => {
            return (
              <tr key={linha.id}>
                {
                  campos.map((col, i) => {
                    if (i === 0) {
                      return <th key={linha.id + col.id}>{linha[col.id]}</th>
                    }
                    if(typeof(col.id) === "object"){
                      console.log(col.id);
                      return <td key={linha.id + col.id}>{linha[col.id[0]][col.id[1]]}</td>
                    }
                    return <td key={linha.id + col.id}>{linha[col.id]}</td>
                  })
                }
                <td><Link to={`/${prefixo}/${linha[link]}`}><AiOutlineLink /></Link></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}