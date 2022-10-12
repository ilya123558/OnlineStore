import React from 'react';
import DiscountDiscription from './discountDiscription/DiscountDiscription';
import './SectionDiscount.scss'
import Discount from './discount/Discount'

const SectionDiscount = () => {
    return (
        <section className="section-discount">
            <DiscountDiscription />
            <Discount/>
        </section>
    );
};

export default SectionDiscount;