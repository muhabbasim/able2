import { useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from 'components/@extended/IconButton';
import { LanguageSquare } from 'iconsax-react';
import Transitions from 'components/@extended/Transitions';
import MainCard from 'components/MainCard';
import { I18n } from 'types/config';
import useConfig from 'hooks/useConfig';
import { ThemeDirection, ThemeMode } from 'config';
import { ConfigContextUpdate } from 'contexts/ConfigContextUpdate';

export default function Language() {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));
  const { mode, i18n } = useConfig();

  const { onChangeLocalization } = ConfigContextUpdate()

  
  const iconBackColorOpen = mode === ThemeMode.DARK ? 'background.paper' : 'secondary.200';
  const iconBackColor = mode === ThemeMode.DARK ? 'background.default' : 'secondary.100';

  const anchorRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListItemClick = (lang: I18n) => {
    onChangeLocalization(lang)
    setOpen(false);
    location.reload();
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 0.5 }}>
    <IconButton
      color="secondary"
      variant="light"
      aria-label="open localization"
      ref={anchorRef}
      aria-controls={open ? 'localization-grow' : undefined}
      aria-haspopup="true"
      onClick={handleToggle}
      size="large"
      sx={{ color: 'secondary.main', bgcolor: open ? iconBackColorOpen : iconBackColor, p: 1 }}
    >
      <LanguageSquare variant="Bulk" />
    </IconButton>
    <Popper
      placement={matchesXs ? 'bottom-start' : 'bottom'}
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
      disablePortal
      popperOptions={{
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [matchesXs ? 0 : 0, 9]
            }
          }
        ]
      }}
    >
      {({ TransitionProps }) => (
        <Transitions type="grow" position={matchesXs ? 'top-right' : 'top'} in={open} {...TransitionProps}>
          <Paper sx={{ boxShadow: theme.customShadows.z1, borderRadius: 1.5 }}>
            <ClickAwayListener onClickAway={handleClose}>
              <MainCard border={false} content={false}>
                <List
                  component="nav"
                  sx={{
                    p: 1,
                    width: '100%',
                    minWidth: 200,
                    maxWidth: 290,
                    bgcolor: theme.palette.background.paper,
                    [theme.breakpoints.down('md')]: { maxWidth: 250 }
                  }}
                >
                  <ListItemButton selected={i18n === 'en'} onClick={() => handleListItemClick('en')}>
                    <ListItemText
                      primary={
                        <Grid container>
                          <Typography color="text.primary">English</Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ ml: '8px' }}>
                            (UK)
                          </Typography>
                        </Grid>
                      }
                    />
                  </ListItemButton>
                  <ListItemButton selected={i18n === 'ar'} onClick={() => handleListItemClick('ar')}>
                    <ListItemText
                      primary={
                        <Grid container>
                          <Typography color="text.primary">Arabic</Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ ml: '8px' }}>
                            (AR)
                          </Typography>
                        </Grid>
                      }
                    />
                  </ListItemButton>
                </List>
              </MainCard>
            </ClickAwayListener>
          </Paper>
        </Transitions>
      )}
    </Popper>
  </Box>
  )
}
