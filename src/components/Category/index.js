import React from 'react';
import spiritual from '../../assests/spirtual.jpg';
import garden from '../../assests/garden.jpg';
import './styles.scss';

const ProductCategory = props => {
    return (
        <div className="productcategory">
            <div className="wrapper">
                <div className="items" style={{ backgroundImage: `url(${spiritual})` }}>
                    <a>Shop spiritual products</a>
                </div>
                <div className="items" style={{ backgroundImage: `url(${garden})` }}>
                    <a>Shop garden products</a>
                </div>
            </div>

        </div>
    )
}
export default ProductCategory;
