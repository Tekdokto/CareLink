import React from 'react';
import Layout from '../../components/Layout';

const Settings = ({toggleTheme, themeMode}) => {
    return(
        <Layout toggleTheme={toggleTheme} themeMode={themeMode}>
        <div>Settings PAGE</div>
        </Layout>
    )
}
export default Settings;