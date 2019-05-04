import React, {FC} from 'react';
import Product from "./Product";

const ProductRow: FC<Product> = ({name, price, stocked}) => (
    <tr>
        <td>{!stocked ? <span style={{color: 'red'}}>{name}</span> : name} </td>
        <td>{price} </td>
    </tr>
);

export default ProductRow;