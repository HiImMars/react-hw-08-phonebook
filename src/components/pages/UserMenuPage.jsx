import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const UserMenuPage = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      {isLoggedIn && <UserMenu />}
      {!isLoggedIn && (
        <h2>
          You should <NavLink to={'/login'}>log in</NavLink> to see your profile
        </h2>
      )}
    </>
  );
};
