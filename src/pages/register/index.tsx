import React, { FC } from 'react';
import Layout from '../../layout/Layout';
import RegisterAnimal from '../../component/register';

const RegisterPage: FC = () => {
  return (
    <Layout>
      <RegisterAnimal />
    </Layout>
  );
};

export default RegisterPage;
