import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./SearchBar";

it('should render SearchBar', function () {
    ReactDOM.render(<SearchBar/>, document.createElement('div'));
});