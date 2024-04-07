import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './components/Layout';
import { publicRoute } from '~/routes';
import { Fragment } from 'react';
function App() {
    return (
        <Routes>
            {publicRoute.map((route, index) => {
                const Page = route.component;

                let Layout = DefaultLayout;
                if (route.layout) {
                    Layout = route.layout;
                } else if (route.layout === null) {
                    Layout = Fragment;
                }
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })}
        </Routes>
    );
}

export default App;
