import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ef6a20',
    },
    secondary: {
      main: '#000000'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        borderRadius: 6
      },
      label: {
        fontSize: 15,
        fontWeight: 600
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 6
      },
      notchedOutline: {
        top: -10
      }
    },
    MuiInputLabel: {
      root: {
        fontSize: 12,
        fontWeight: 600,
        color: '#a3a4a8'
      }
    }
  }
});

const useStyles = makeStyles((theme) => ({
  main: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 1),
  },
  paperWrapper: {
    padding: '40px 15px 10px 15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  emailContainer: {
    paddingBottom: 15
  },
  forgotPassword: {
    paddingBottom: 10,
    "& span": {
      fontSize: 13,
      fontWeight: 600
    }

  }
}));

export default function SignIn() {
  const classes = useStyles();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.main}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Paper elevation={3}>
            <div className={classes.paperWrapper}>
              <Typography component="h1" variant="h5">
                Log In
          </Typography>
              <form className={classes.form} noValidate>
                <Grid container>
                  <Grid item xs={12} className={classes.emailContainer}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                      size='small'
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl variant="outlined" fullWidth size='small'>
                      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        }
                        labelWidth={70}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Button
                  // type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Log In
            </Button>
                <Grid container justifyContent='flex-end' className={classes.forgotPassword}>
                  <Grid item>
                    <span>
                      Forgot Password?
                </span>
                  </Grid>
                </Grid>
              </form>
              <div style={{ width: '100%' }}>
                <hr style={{ borderColor: '#f2f2f27a' }} />
              </div>
              <Button
                // type="submit"
                fullWidth
                color="secondary"
                className={classes.submit}
              >
                Sign Up
            </Button>
            </div>
          </Paper>
        </Container>
      </div>
    </ThemeProvider>

  );
}