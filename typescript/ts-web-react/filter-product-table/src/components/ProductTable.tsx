import React, {FC} from 'react';
import Product from "./Product";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

type ProductTableProp = {
    filterText: string;
    inStockOnly: boolean;
    products: Product[];
};

const ProductTable: FC<ProductTableProp> = ({products, filterText, inStockOnly}) => {
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
            rows.push(<ProductCategoryRow key={p.category} category={p.category}/>);
        }
        category = p.category;
        rows.push(<ProductRow {...p} key={p.name}/>);
    });
    return (
        <table>
            <thead>
            <tr>
                <td>Name</td>
                <td>Price</td>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    );
};

export default ProductTable;