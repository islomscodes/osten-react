import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Header from './containers/Header';
import Page404 from './containers/Page404';
import Service from "./pages/Services/service";
import Product from "./pages/Product/Product";
import Constructor from "./pages/Constructor/Constructor";
import News from "./pages/News/News";    
import Contact from "./pages/Contact/Contact";    
;
let pages = [
  { path: "/", component: <Home />, exact: true },
  { path: "/about", component: <About /> },
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/service", component: <Service /> },
  { path: "/Product", component: <Product /> },
  { path: "/Constructor", component: <Constructor /> },
  { path: "/News", component: <News /> },
  { path: "/Contact", component: <Contact /> },
  { component: <Page404 /> },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {pages.map((page, index) => {
          return <Route path={page.path} exact={page.exact} key={page.path}>
            {page.component}
          </Route>
        })}
      </Switch>
    </div>
  );
}

export default App;
