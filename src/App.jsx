// App.jsx
import HomeLayout from './components/HomeLayout';
import { CookiesProvider } from 'react-cookie';
import {DarkThemeProvider} from './components/providers/DarkThemeProvider';
import {LoginProvider} from './components/providers/LoginProvider';
function App() {
  return (
    <CookiesProvider>
      <DarkThemeProvider>
        <LoginProvider>
          <HomeLayout/>
        </LoginProvider>
      </DarkThemeProvider>
    </CookiesProvider>
  );
}

export default App