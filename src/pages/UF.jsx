import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tabela from '../components/Tabela';

export default function UF({ match }) {
    const regiaoSigla = match.params.id;
    const [regioes, setRegioes] = useState([]);
    useEffect(() => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes')
            .then(data => data.json())
            .then(regioes => {
                let reg = [];
                regioes.forEach(r => {
                    if (r.UF.sigla === regiaoSigla) {
                        return reg.push(r);
                    };
                });
                setRegioes(reg);
            })
            .catch(err => console.error(err))
    }, [regiaoSigla])

    const campos = [
        { nome: "ID", id: "id" },
        { nome: "Nome", id: "nome" },
        { nome: "Região", id: ["UF", "nome"] },
    ]

    if (regioes.length === 0) {
        return (
            <CircularProgress />
        )
    }
    return (
        <div>
            {console.log(regioes)}
            <Tabela campos={campos} itens={regioes} link={"id"} prefixo="mesorregiao" />
        </div>
    );
}