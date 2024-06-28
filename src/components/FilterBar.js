// src/components/FilterBar.js
import React from 'react';
import '../styles/FilterBar.css';

function FilterBar({ onFilterChange }) {
  return (
    <div className="filter-bar">
      <select onChange={(e) => onFilterChange('price', e.target.value)}>
        <option value="">Ordenar por precio</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
      <select onChange={(e) => onFilterChange('category', e.target.value)}>
        <option value="">Categoría</option>
        <option value="strawhats">Straw Hats</option>
        <option value="other">Otros</option>
      </select>
    </div>
  );
}

export default FilterBar;
