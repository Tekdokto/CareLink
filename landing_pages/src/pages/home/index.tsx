import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

function HomePage({ toggleTheme, themeMode }) {
    return (
      <div>
        <h1>Welcome to my App</h1>
        <IconButton onClick={toggleTheme}>
          {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <p>This is my homepage.</p>
      </div>
    );
  }
export default HomePage;  