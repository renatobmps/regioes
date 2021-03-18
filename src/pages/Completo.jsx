import React, { useState, useEffect } from 'react';

export default function Completo() {
    const [regioes, setRegioes] = useState([]);
    useEffect(() => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=id')
            .then(json => json.json())
            .then(res => setRegioes(res))
            .catch(err => console.error(err))
    }, []);
    if (regioes.length === 0) {
        return (
            <h1>Carregando...</h1>
        )
    }
    return (
        <table className="regioes">
            <thead>
                <tr>
                    <th>Distrito</th>
                    <th>Municipio</th>
                    <th>Microrregiao</th>
                    <th>Mesorregiao</th>
                    <th>UF</th>
                    <th>Região</th>
                    {/* <th>Link</th> */}
                </tr>
            </thead>
            <tbody>
                {
                    regioes.map((regiao, i) => {
                        return (
                            <tr key={i+regiao.id}>
                                <th>{regiao.id} - {regiao.nome}</th>
                                <td>{regiao.municipio.id} - {regiao.municipio.nome}</td>
                                <td>{regiao.municipio.microrregiao.id} - {regiao.municipio.microrregiao.nome}</td>
                                <td>{regiao.municipio.microrregiao.mesorregiao.id} - {regiao.municipio.microrregiao.mesorregiao.nome}</td>
                                <td>{regiao.municipio.microrregiao.mesorregiao.UF.id} - {regiao.municipio.microrregiao.mesorregiao.UF.sigla}</td>
                                <td>{regiao.municipio.microrregiao.mesorregiao.UF.regiao.id} - {regiao.municipio.microrregiao.mesorregiao.UF.regiao.nome}</td>
                                {/* <td><a href={`?uf=${regiao.municipio.microrregiao.mesorregiao.UF.sigla}`}>#</a></td> */}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}