import { NavLink } from 'react-router-dom';
import s from './navigation.module.css';
import { useRouteMatch } from 'react-router';
import { useSelector } from 'react-redux';

function Navigation() {
  const searchQuery = useSelector(state => state.сities);
  const { url } = useRouteMatch();

  return (
    <>
      <h2 className={s.mainTitle}>Weather</h2>
      <header className={s.wrapperNav}>
        <nav className="nav">
          <NavLink exact to="/" className={s.link} activeClassName={s.active}>
            Main
          </NavLink>
          <NavLink to={`${url}in/${searchQuery}`} className={s.link} activeClassName={s.active}>
            10 days forecast
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Navigation;
