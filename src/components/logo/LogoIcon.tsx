// material-ui
import { useTheme } from '@mui/material/styles';
import kgpIcon from 'assets/images/kgb-logo2.png'
import { Link } from 'react-router-dom';


export default function LogoIcon() {
  const theme = useTheme();

  return (
    <Link to={'/'}>
      <img src={kgpIcon} alt="icon logo" width="60" />
    </Link>
  );
}
