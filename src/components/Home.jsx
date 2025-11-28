import React from 'react';
import { withTranslation } from 'react-i18next';

const Home = ({ t }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600">{t('home.title')}</h1>
    </div>
  );
};

export default withTranslation()(Home);
