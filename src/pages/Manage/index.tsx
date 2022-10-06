import React, {FC} from 'react';
import Layout from '../../layout/Layout';
import ManageList from '../../component/manage';

const ManagePage: FC = () => {
    return (
        <Layout>
            <ManageList/>
        </Layout>
    );
};

export default ManagePage;