import {Route, Routes} from 'react-router-dom';
import {pageRoutes} from '../appData/routing/pageRoutes';
import Footer from '../organisms/footer/Footer';
import Main from '../organisms/main/Main';

const Layout = ({appData}) => {
  return (
    <div className="layout">
      <Main>
        <Routes>
          {pageRoutes.map((route, index) => (
            <Route key={index} element={route.element} path={route.path} />
          ))}
        </Routes>
      </Main>
      <Footer appData={appData} />
    </div>
  );
};

export default Layout;
