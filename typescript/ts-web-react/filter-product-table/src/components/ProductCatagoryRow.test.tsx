import React from 'react';
import ReactDOM from 'react-dom';
import ProductCategoryRow from "./ProductCategoryRow";

it('should render ProductCategoryRow', function () {
    const row = {
        category: 'football'
    }
    const tbody = document.createElement('tbody');
    ReactDOM.render(<ProductCategoryRow {...row}/>, tbody);
});