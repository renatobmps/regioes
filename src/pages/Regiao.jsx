import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tabela from '../components/Tabela';

export default function Regiao({ match }) {
    const regiaoSigla = match.params.id;
    const [regioes, setRegioes] = useState([]);
    useEffect(() => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(data => data.json())
            .then(regioes => {
                let reg = [];
                regioes.forEach(r => {
                    if (r.regiao.sigla === regiaoSigla) {
                        return reg.push(r);
                    };
                });
                setRegioes(reg);
            })
            .catch(err => console.error(err))
    }, [regiaoSigla])

    const campos = [
        { nome: "ID", id: "id" },
        { nome: "Sigla", id: "sigla" },
        { nome: "Nome", id: "nome" },
        { nome: "Região", id: ["regiao", "nome"] },
    ]

    if (regioes.length === 0) {
        return (
            <CircularProgress />
        )
    }
    return (
        <div>
            <Tabela campos={campos} itens={regioes} link={"sigla"} prefixo="uf" />
        </div>
    );
}