import React, {FC} from 'react';

type ProductCategoryRowProp = {
    category: string
}
const ProductCategoryRow: FC<ProductCategoryRowProp> = ({category}) => (
    <tr>
        <th colSpan={2}>{category}</th>
    </tr>
);

export default ProductCategoryRow;