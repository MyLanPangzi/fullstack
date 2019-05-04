import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import React, {Component} from 'react';

type FilterProductTableProp = {};

type FilterProductTableState = {
    filterText: string;
    inStockOnly: boolean;

};

class FilterProductTable extends Component<FilterProductTableProp, FilterProductTableState> {

    constructor(props: FilterProductTableProp) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }

    private handleInStockChange = (e: React.ChangeEvent) => {
        const value = (e.target as HTMLInputElement).checked;
        this.setState({inStockOnly: value});

    };
    private handleFilterTextChage = (e: React.ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value;
        this.setState({filterText: value});
    };

    render() {
        return (
            <div>
                <SearchBar
                    onFilterTextChange={this.handleFilterTextChage}
                    onInStockChange={this.handleInStockChange}
                    {...this.state}
                />
                <ProductTable {...this.state} products={PRODUCTS}/>
            </div>
        );
    }
}


export default FilterProductTable;
const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
