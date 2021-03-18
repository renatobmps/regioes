import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tabela from '../components/Tabela';

export default function UFs() {
    const [regioes, setRegioes] = useState([]);
    useEffect(() => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(data => data.json())
            .then(regioes => setRegioes(regioes))
            .catch(err => console.error(err))
    }, [])

    const campos = [
        { nome: "ID", id: "id" },
        { nome: "Sigla", id: "sigla" },
        { nome: "Nome", id: "nome" },
        { nome: "Região", id: [["regiao"], ["nome"]] },
    ]

    if (regioes.length === 0) {
        return (
            <CircularProgress />
        )
    }
    return (
        <div>
            {console.log(regioes)}
            <Tabela campos={campos} itens={regioes} link={"sigla"} prefixo="uf" />
        </div>
    );
}