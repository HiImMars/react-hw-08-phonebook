import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Contacts } from './pages/ContactsPage';
import { Home } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
};