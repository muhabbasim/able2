// material-ui
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// project-imports
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import MoreIcon from 'components/@extended/MoreIcon';

// assets
import Avatar1 from '/src/assets/images/users/avatar-5.png';
import Avatar2 from '/src/assets/images/users/avatar-6.png';
import Avatar3 from '/src/assets/images/users/avatar-7.png';
import Avatar4 from '/src/assets/images/users/avatar-8.png';
import Avatar5 from '/src/assets/images/users/avatar-9.png';

// ==============================|| INVOICE - DASHBOARD USER ||============================== //

export default function InvoiceUserList() {
  return (
    <MainCard
      title="Recent Invoice"
      secondary={
        <IconButton edge="end" aria-label="comments" color="secondary" sx={{ transform: 'rotate(90deg)' }}>
          <MoreIcon />
        </IconButton>
      }
    >
      <Grid container spacing={2.5} alignItems="center">
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar alt="User 1" src={Avatar1} />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography variant="subtitle1">
                David Jones -{' '}
                <Typography color="secondary" component="span">
                  {' '}
                  #790841
                </Typography>
              </Typography>
              <Typography color="primary">$329.20</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" color="secondary">
                5 min ago
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar alt="User 1" src={Avatar2} />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography variant="subtitle1">
                Jenny Jones -{' '}
                <Typography color="secondary" component="span">
                  {' '}
                  #790841
                </Typography>
              </Typography>
              <Typography color="primary">$182.89</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" color="secondary">
                1 day ago
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar alt="User 1" src={Avatar3} />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography variant="subtitle1">
                Harry Ben -{' '}
                <Typography color="secondary" component="span">
                  {' '}
                  #790841
                </Typography>
              </Typography>
              <Typography color="primary">3 week ago</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" color="secondary">
                5 min ago
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar alt="User 1" src={Avatar4} />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography variant="subtitle1">
                Jenifer Vintage -{' '}
                <Typography color="secondary" component="span">
                  {' '}
                  #790841
                </Typography>
              </Typography>
              <Typography color="primary">$182.89</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" color="secondary">
                3 week ago
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar alt="User 1" src={Avatar5} />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography variant="subtitle1">
                Stebin Ben -{' '}
                <Typography color="secondary" component="span">
                  {' '}
                  #790841
                </Typography>
              </Typography>
              <Typography color="primary">$324.00</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" color="secondary">
                1 month ago
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="outlined" color="secondary">
            View All
          </Button>
        </Grid>
      </Grid>
    </MainCard>
  );
}
