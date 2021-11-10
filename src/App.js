import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from './components/container/Container';
import Navigation from './components/navigation/Navigation';
import Loader from './components/loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import MainViews from './views/mainViews/MainViews';
// import SideViews from './views/sideViews/SideViews';
// import NotFound from './views/notFound/NotFound';
const MainViews = lazy(() =>
  import('./views/mainViews/MainViews' /* webpackChunkName: "home-page" */),
);
const SideViews = lazy(() =>
  import('./views/sideViews/SideViews' /* webpackChunkName: "movies-page" */),
);
const NotFound = lazy(() =>
  import('./views/notFound/NotFound' /* webpackChunkName: "not-found" */),
);

function App() {
  return (
    <Container>
      <Navigation></Navigation>
      <ToastContainer autoClose={3000} position="top-center" />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <MainViews />
          </Route>
          <Route exact path="/in/:city">
            <SideViews />
          </Route>
          <Route path="">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
