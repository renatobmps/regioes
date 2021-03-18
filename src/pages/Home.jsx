import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <nav>
            <Link to="completo">Completo</Link><br />
            <Link to="regiao">Regiões</Link><br />
            <Link to="uf">UFs</Link><br />
            <Link to="mesorregiao">Mesorregiões</Link><br />
            {/* <Link to="microrregiao">Microrregiões</Link><br /> */}
            {/* <Link to="municipio">Municípios</Link><br /> */}
            {/* <Link to="distrito">Distritos</Link><br /> */}
        </nav>
    )
}