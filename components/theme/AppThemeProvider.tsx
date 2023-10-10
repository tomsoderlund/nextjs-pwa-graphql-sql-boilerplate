/*
import { useTheme } from '@mui/material/styles'

const MyComponent = () => {
  const theme = useTheme()
  return <div style={{ backgroundColor: theme.palette.primary.main }}>Hello</div>
}
*/

import { ThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles'

export const COLORS = {
  BLACK: '#221e1f',
  GRAY_DARK: '#333',
  GRAY_LIGHTER: '#e5eaf2',
  GRAY_LIGHT: '#f5f6f7',
  WHITE: '#fff',

  BLUE_LIGHT: '#dbe4fe',
  BLUE_MEDIUM: '#91b3fa',
  BLUE_DARK: '#4e55e6',
  RED_LIGHT: '#ff867e',
  RED_DARK: '#e96059',

  PINK: '#faeded',

  RED: '#fce5e5',
  YELLOW: '#fffce1',
  ORANGE: '#fff3e1',
  GREENISH: '#f3fce0',
  GREEN: '#e6fce0',
  BLUE: '#e5fcfc',
  GRAY: '#e0e0e0',
  GRAY_LIGHT2: '#f5f5f5'
}

export interface AppThemeOptions extends ThemeOptions {
  customPalette: {
    signinLayout?: {
      backgroundColor: string
    }
    menuTop?: {
      backgroundColor: string
      color: string
    }
  }
}

const themeOptions: AppThemeOptions = {
  palette: {
    primary: { main: COLORS.BLUE_DARK, contrastText: COLORS.WHITE },
    secondary: { main: COLORS.BLUE_MEDIUM },
    background: { paper: COLORS.GRAY_LIGHT }
  },
  customPalette: {
    signinLayout: { backgroundColor: COLORS.PINK },
    menuTop: { backgroundColor: COLORS.WHITE, color: COLORS.GRAY_DARK }
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 13
  }
/*
    palette: {
      primary: { main: '#blue' },
      secondary: { main: '#green' },
    },
    typography: {
      fontSize: 16,
    },
    spacing: 4,
    shape: {
      borderRadius: 8,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
      },
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          containedPrimary: {
            backgroundColor: '#d12c24', // red
            color: COLORS.WHITE
          },
        },
      },
    },
  */
}
const theme = createTheme(themeOptions)

interface AppThemeProviderProps {
  children: React.ReactNode
}

function AppThemeProvider ({ children }: AppThemeProviderProps): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
export default AppThemeProvider
