import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tabela from '../components/Tabela';

export default function Regioes() {
    const [regioes, setRegioes] = useState([]);
    useEffect(() => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
            .then(data => data.json())
            .then(regioes => setRegioes(regioes))
            .catch(err => console.error(err))
    }, [])

    const campos = [
        { nome: "ID", id: "id" },
        { nome: "Sigla", id: "sigla" },
        { nome: "Nome", id: "nome" },
    ]

    if (regioes.length === 0) {
        return (
            <CircularProgress />
        )
    }
    return (
        <div>
            <Tabela campos={campos} itens={regioes} link={"sigla"} prefixo="regiao" />
        </div>
    );
}