'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

// Dynamic imports for better performance
const All = dynamic(() => import('../../../Component/pages/All'));
const Cafe = dynamic(() => import('../../../Component/pages/cafe'));
const Home = dynamic(() => import('../../../Component/pages/Home'));
const Toys = dynamic(() => import('../../../Component/pages/toys'));
const Fresh = dynamic(() => import('../../../Component/pages/Fresh'));
const Electronics = dynamic(() => import('../../../Component/pages/Electroin'));
const Mobiles = dynamic(() => import('../../../Component/pages/Mobile'));
const Beauty = dynamic(() => import('../../../Component/pages/Beauty'));
const Fashion = dynamic(() => import('../../../Component/pages/Fashsion'));
const Gourmet = dynamic(() => import('../../../Component/pages/Gourmet'));

const CategoryPage = ({ params }) => {
  const { slug } = React.use(params); 
  
  const renderCategoryComponent = () => {
    switch (slug) {
      case 'cafe':
        return <Cafe />;
      case 'home':
        return <Home />;
      case 'toys':
        return <Toys />;
      case 'fresh':
        return <Fresh />;
      case 'electronics':
        return <Electronics />;
      case 'mobiles':
        return <Mobiles />;
      case 'beauty':
        return <Beauty />;
      case 'fashion':
        return <Fashion />;
      case 'gourmet':
        return <Gourmet />;
      default:
        return <All />;
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
       {renderCategoryComponent()}
    </div>
  );
};

export default CategoryPage;
