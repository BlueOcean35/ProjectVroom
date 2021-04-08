import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({

})

theme.props = {
  MuiButton: {

  }
}

theme.overrides = {
  MuiButton: {
    root: {
      marginTop: '15px',
    height: '75px',
    width: `35%`,
    fontSize: "30px",
    backgroundColor: "#8e0e00",
    color: '#fff',
    fontFamily: "Helvetica",
    '&:hover': {
      opacity: `0.9`,
      color: '#211C17',
      backgroundColor: "#DB1200"
    },
    transition: "all 0.5s"
    }
  },
  MuiIconButton: {
    root: {
    backgroundColor: "#8e0e00",
    color: '#fff',
    fontFamily: "Helvetica",
    '&:hover': {
      opacity: `0.9`,
      color: '#211C17',
      backgroundColor: "#DB1200"
    },
    marginRight: "10px",
    transition: "all 0.5s"
    }
  },
  MuiTooltip : {

    popperInteractive: {
      marginRight: '10px',
      backgroundColor: "#8e0e00",
      '&:hover': {
        opacity: `0.9`,
        color: '#211C17',
        backgroundColor: "#DB1200"
      },
    },
    tooltip: {
      marginRight: '10px',
    color: 'white',
    backgroundColor: "#8e0e00",
    '&:hover': {
      opacity: `0.9`,
      color: '#211C17',
      backgroundColor: "#DB1200"
    },
    transition: "all 0.4s",
    }
  },
  MuiInput: {
    root: {
    marginRight: '10px',
    marginLeft: '10px',
    color:'#fff',
    height: '55px',
    fontSize: '20px',

    },
    focused: {
      marginRight: '10px',
      marginLeft: '10px',
      color:'#fff',
      height: '55px',
      fontSize: '20px',
    },
    underline: {
      '&:after': {
        borderBottom: '2px solid #DB1200',
      },
    }

  },
  MuiInputBase: {
    root: {
      backgroundColor: '#211C17'
    }
  },
  MuiInputLabel: {
    root: {
      marginRight: '10px',
    background: '#211C17',
    color:'#fff',
    paddingLeft: '10px',
    fontSize: '20px',
    boxShadow: '2px 10px -14px 14px #FFF'
    }

  }

}

export default theme;