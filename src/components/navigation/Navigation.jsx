import { NavLink } from 'react-router-dom';
import s from './navigation.module.css';
import { useLocation, useRouteMatch } from 'react-router';
import { useSelector } from 'react-redux';

function Navigation() {
  const location = useLocation();
  const searchQuery = useSelector(state => state.сities);
  const { url } = useRouteMatch();

  return (
    <div className={s.wrapperNav}>
      <nav className="nav">
        <NavLink exact to="/" className={s.link} activeClassName={s.active}>
          Main
        </NavLink>
        <NavLink to={`${url}in/${searchQuery}`} className={s.link} activeClassName={s.active}>
          Побочная страница
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
