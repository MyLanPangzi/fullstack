import React from 'react';
import ReactDOM from 'react-dom';
import ProductRow from "./ProductRow";
import Product from "./Product";

it('should render ProductRow', function () {
    const row: Product = {
        category: 'ball',
        name: 'football',
        price: '100',
        stocked: false,
    }
    const tbody = document.createElement('tbody');
    ReactDOM.render(<ProductRow {...row}/>, tbody);
});