import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Bem vindo!</h1>
            <Link to="regioes">Regioes</Link>
            <Link to="sp">São Paulo</Link>
        </div>
    )
}