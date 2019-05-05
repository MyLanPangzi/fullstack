import React, {ChangeEvent, Component, FC} from "react";

interface Product {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}

interface FileterableProductTableState {
    filterText: string;
    inStockOnly: boolean;
}

type FilterableProductTableProp = { products: Product[] };

class FilterableProductTable extends Component<FilterableProductTableProp, FileterableProductTableState> {
    private handelFilterTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            filterText: e.target.value
        });

    };
    private handleInStockOnlyChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inStockOnly: e.target.checked
        });
    };

    constructor(props: FilterableProductTableProp) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }

    render() {
        return (
            <div>
                <SeachBar
                    onFilterTextChange={this.handelFilterTextChange}
                    onInStockOnlyChange={this.handleInStockOnlyChecked}
                    {...this.state}
                />
                <ProductTable
                    products={this.props.products}
                    {...this.state}
                />
            </div>
        );
    }
}

interface SearchBarProp extends FileterableProductTableState {

    onFilterTextChange(e: ChangeEvent): void

    onInStockOnlyChange(e: ChangeEvent): void
}

const SeachBar: FC<SearchBarProp> = ({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) => (
    <form>
        <input type='text' value={filterText} onChange={onFilterTextChange} placeholder={'...search'}/>
        <p>
            <input type={'checkbox'} onChange={onInStockOnlyChange} checked={inStockOnly}/> {' '} Only in stock
        </p>
    </form>
)

interface ProductTableProp extends FileterableProductTableState {
    products: Product[];
}

const ProductTable: FC<ProductTableProp> = ({filterText, inStockOnly, products}) => {
    let rows: any[] = [];
    let category = '';
    products.forEach((p, i) => {
        if (!p.name.includes(filterText)) {
            return;
        }
        if (inStockOnly && p.stocked !== inStockOnly) {
            return;
        }
        if (category !== p.category) {
            rows.push(<ProductCategoryRow key={p.category} {...p}/>);
        }
        category = p.category;
        rows.push(<ProductRow {...p} key={p.name}/>);
    });
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    );
}

const ProductCategoryRow: FC<Product> = ({category}) => (
    <tr>
        <td colSpan={2}>
            {category}
        </td>
    </tr>
);
const ProductRow: FC<Product> = ({name, price, stocked}) => (
    <tr>
        <td>{!stocked ? <span style={{color: 'red'}}>{name}</span> : name} </td>
        <td>{price} </td>
    </tr>
);

export default FilterableProductTable;
