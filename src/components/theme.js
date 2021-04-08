import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({

})
const drawerWidth = 600;
theme.props = {
  MuiButton: {

  }
}

theme.overrides = {

  MuiButton: {
    root: {
    marginTop: '15px',
    height: '100%',
    width: `35%`,
    fontSize: "30px",
    backgroundColor: "#211C17",
    color: '#DB1200',
    fontFamily: "Helvetica",
    '&:hover': {
      opacity: `0.9`,
      color: '#fff',
      backgroundColor: "#DB1200",
      transform: 'translateY(-4px)',
      boxShadow: '0px 4px 8px 0px rgba(255,255,255,255.02)'
    },
    transition: "all 0.5s",
    boxShadow: '0px 1px 2px 0px rgba(255,255,255,255.02)',

    },
    containedSecondary: {
      color: "#DB1200",
      backgroundColor: "#211C17",
      fontSize: "20px",
      '&:hover': {
        opacity: `0.9`,
        color: '#fff',
        backgroundColor: "#DB1200",
        transform: 'translateY(-4px)',
        boxShadow: '0px 4px 8px 0px rgba(255,255,255,255.02)'
      },
    },
    contained: {
      color: "black"
    }
  },
  MuiSlider: {
    thumb: {
      color: "#DB1200"
    }
  },
  MuiAppBar: {
   colorPrimary: {
     backgroundColor: "211C17"
   }
  },
  MuiTypography: {
    root: {
    color: '#fff',
    fontFamily: "Helvetica",

    },
    body1: {
      color: "#fff"
    }
  },
  MuiListItemIcon: {
    root: {
      color: "#fff"
    }
  },
  MuiListItemText: {
    primary: {
      color: "#fff"
    }
  },
  MuiButtonBase: {
    root: {
    backgroundColor: "#211C17",
    color: '#DB1200',
    fontFamily: "Helvetica",
    '&:hover': {
      opacity: `0.9`,
      color: '#fff',
      backgroundColor: "#DB1200",
      transform: 'translateY(-4px)',
      boxShadow: '0px 4px 8px 0px rgba(255,255,255,255.02)'

    },
    marginRight: "10px",
    transition: "all 0.5s",
    boxShadow: '0px 1px 2px 0px rgba(255,255,255,255.02)',

    }
  },
  MuiListSubheader: {
    root: {
      color: "#fff"
    },
  },
  MuiFormControl: {
    root: {
      color: "#211C17",
      backgroundColor: "#red"
    },
  },
  MuiFormLabel: {
    root: {
      color: "#fff",

        "&:focused": {
          color: "#fff"
        }
    },
    focused: {
      color: "#fff"
    }
  },

  MuiBox: {
    root: {
      color: 'white',
      backgroundColor: "#211C17"
    },
  },
  MuiIconButton: {
    root: {
    backgroundColor: "#211C17",
    color: '#DB1200',
    fontFamily: "Helvetica",
    '&:hover': {
      opacity: `0.9`,
      color: '#fff',
      backgroundColor: "#DB1200",
      transform: 'translateY(-4px)',
      boxShadow: '0px 4px 8px 0px rgba(255,255,255,255.02)'

    },
    marginRight: "10px",
    transition: "all 0.5s",
    boxShadow: '0px 1px 2px 0px rgba(255,255,255,255.02)',

    }
  },
  MuiTooltip : {
    popperInteractive: {
      marginRight: '10px',
      backgroundColor: "#DB1200",
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

  MuiPaper: {
    root: {
      backgroundColor: '#211C17',
      color: '#fff'
    }
  },
  MuiDivider: {
    root: {
      backgroundColor: '#fff'
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
      height: '55px',
      fontSize: '20px',
    },
    underline: {
        borderBottom: '2px solid #fff',
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
  MuiListItem: {
    gutters: {
      color: "black"
    },
    button: {
      color: "#DB1200",
    }
  },
  MuiList: {
    root: {
      backgroundColor: '#8e0e00',
      color: "#FFF"
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

  },


}

export default theme;