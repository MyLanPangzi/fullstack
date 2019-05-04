import React, {FC} from 'react';

type SearchBarProp = {
    filterText: string;
    inStockOnly: boolean;
    onFilterTextChange(e: React.ChangeEvent): void;
    onInStockChange(e: React.ChangeEvent): void;
};

const SearchBar: FC<SearchBarProp> = ({onFilterTextChange, onInStockChange, filterText, inStockOnly}) => (
    <form>
        <input type="text" onChange={onFilterTextChange} value={filterText} placeholder={'...search'}/>
        <p>
            <input onChange={onInStockChange} checked={inStockOnly} type="checkbox"/>{' '} Only show products in stock
        </p>
    </form>
);

export default SearchBar;