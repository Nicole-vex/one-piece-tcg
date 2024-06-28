// src/components/Shop.js
import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { CartContext } from '../contexts/CartContext';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import Breadcrumbs from './Breadcrumbs';
import '../styles/Shop.css';

function Shop() {
  const { addToCart } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({});

  const items = [
    {
      id: 1,
      name: 'Monkey D. Luffy',
      price: 1000,
      image: 'https://static.dotgg.gg/onepiece/card/ST01-001.webp',
      category: 'strawhats',
    },
    {
      id: 2,
      name: 'Roronoa Zoro',
      price: 900,
      image: 'https://storedevastation.com/cdn/shop/files/515356_199c0caa-3559-4fc9-914f-83c35511c2dc.jpg?v=1714152780',
      category: 'strawhats',
    },
    {
      id: 3,
      name: 'Nami',
      price: 800,
      image: 'https://arkhamcomics.cl/wp-content/uploads/2023/12/Nami-Parallel-Romance-Dawn-OP01.webp',
      category: 'strawhats',
    },
    {
      id: 4,
      name: 'Usopp',
      price: 700,
      image: 'https://cdn.cardsrealm.com/images/cartas/booster-pack-pillars-of-strength/EN/med/usopp-op03-041-op03-041_p1.png?9332',
      category: 'strawhats',
    },
    {
      id: 5,
      name: 'Sanji',
      price: 950,
      image: 'https://devastation-store-chile.myshopify.com/cdn/shop/products/0e431d42-8139-5be5-84b7-fb0ea67c8e16.jpg?v=1678403766',
      category: 'strawhats',
    },
    {
      id: 6,
      name: 'Tony Tony Chopper',
      price: 600,
      image: 'https://www.huntercardtcg.com/wp-content/uploads/2024/05/544530.jpg.webp',
      category: 'strawhats',
    },
    {
      id: 7,
      name: 'Nico Robin',
      price: 1100,
      image: 'https://cdnx.jumpseller.com/cinnamon-cat/image/43941866/nico_robin_gift.webp?1703881075',
      category: 'strawhats',
    },
    {
      id: 8,
      name: 'Franky',
      price: 900,
      image: 'https://static.dotgg.gg/onepiece/card/OP07-107.webp',
      category: 'strawhats',
    },
    {
      id: 9,
      name: 'Brook',
      price: 850,
      image: 'https://arkhamcomics.cl/wp-content/uploads/2023/08/Brook-Paramount-War-OP02.webp',
      category: 'strawhats',
    },
    {
      id: 10,
      name: 'Jinbe',
      price: 950,
      image: 'https://www.tiendalacomarca.cl/cdn/shop/files/528625_46ed0bba-3925-492a-a45a-4abea2d4c9f4_800x.jpg?v=1719234854',
      category: 'strawhats',
    },
    {
      id: 11,
      name: 'OP1',
      price: 500,
      image: 'https://example.com/op1.jpg',
      category: 'other',
    },
    {
      id: 12,
      name: 'OP2',
      price: 500,
      image: 'https://example.com/op2.jpg',
      category: 'other',
    },
    {
      id: 13,
      name: 'OP3',
      price: 500,
      image: 'https://example.com/op3.jpg',
      category: 'other',
    },
    {
      id: 14,
      name: 'OP4',
      price: 500,
      image: 'https://example.com/op4.jpg',
      category: 'other',
    },
  ];

  const filteredItems = items
    .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (filter.price === 'asc') return a.price - b.price;
      if (filter.price === 'desc') return b.price - a.price;
      return 0;
    })
    .filter(item => {
      if (!filter.category) return true;
      return item.category === filter.category;
    });

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (type, value) => {
    setFilter(prev => ({ ...prev, [type]: value }));
  };

  return (
    <motion.div
      className="shop-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Breadcrumbs crumbs={[{ path: '/', label: 'Inicio' }, { path: '/shop', label: 'Tienda' }]} />
      <h1>Tienda</h1>
      <SearchBar onSearch={handleSearch} />
      <FilterBar onFilterChange={handleFilterChange} />
      <div className="items-container">
        {filteredItems.map(item => (
          <motion.div
            className="item"
            key={item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.price} CLP</p>
            <button onClick={() => addToCart(item)}>Agregar al Carrito</button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Shop;
