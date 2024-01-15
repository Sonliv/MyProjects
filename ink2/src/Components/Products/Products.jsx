import React, { useState } from 'react';
import './Products.scss';
import Card from '../../BaseComponents/Card/Card';
import { ways } from '../../BaseComponents/Card/data';

function France() {
    return (
        <div className="cards-wrapper">
            {ways.slice(0, 6).map((way, index) => (
                <Card key={index} {...way} imgCard={`/public/${way.imgSrc}.png`} />
            ))}
        </div>
    );
}

function Germany() {
    return (
        <div className="cards-wrapper">
            {ways.slice(6, 12).map((way, index) => (
                <Card key={index} {...way} imgCard={`/public/${way.imgSrc}.png`} />
            ))}
        </div>
    );
}

function England() {
    return (
        <div className="cards-wrapper">
            {ways.slice(12, 18).map((way, index) => (
                <Card key={index} {...way} imgCard={`/public/${way.imgSrc}.png`} />
            ))}
        </div>
    );
}

export default function Products() {
    const [tab, setTab] = useState('France');

    const handleTabClick = (tabValue) => {
        setTab(tabValue);
    };

    const renderTabContent = () => {
        switch (tab) {
            case 'France':
                return <France />;
            case 'Germany':
                return <Germany />;
            case 'England':
                return <England />;
            default:
                return null;
        }
    };

    return (
        <section className="products">
            <div className="container">
                <div className="products-top">
                    <h3 className="products-title">Репродукции</h3>
                    <div className="products-nav">
                        <button  className={`products-button ${tab === 'France' ? 'active' : ''}`} onClick={() => handleTabClick('France')}>Франция</button>
                        <button className={`products-button ${tab === 'Germany' ? 'active' : ''}`} onClick={() => handleTabClick('Germany')}>Германия</button>
                        <button className={`products-button ${tab === 'England' ? 'active' : ''}`} onClick={() => handleTabClick('England')}>Англия</button>
                    </div>
                </div>
                {renderTabContent()}
            </div>
        </section>
    );
}
