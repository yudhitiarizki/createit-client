import React from 'react';
import Footer from '../components/General/Footer';
import ServicePerCategory from '../components/Services/ServicePerCategory';

const CategoryDetail = () => {
  return (
    <>
      <ServicePerCategory />
      <div style={{ 'width': '100%', 'background': '#e5e5e533' }}>
        <Footer />
      </div>
    </>
  );
};

export default CategoryDetail;