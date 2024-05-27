import { extendTheme } from '@mui/joy'

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          '50': '#eef2ff',
          '100': '#e0e7ff',
          '200': '#c7d2fe',
          '300': '#a5b4fc',
          '400': '#818cf8',
          '500': '#6366f1',
          '600': '#4f46e5',
          '700': '#4338ca',
          '800': '#3730a3',
          '900': '#312e81',
        },
        background: {
          body: '#f4f7fd',
          surface: '#fff',
        },
        text: {
          primary: '#000',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          '50': '#eef2ff',
          '100': '#e0e7ff',
          '200': '#c7d2fe',
          '300': '#a5b4fc',
          '400': '#818cf8',
          '500': '#6366f1',
          '600': '#4f46e5',
          '700': '#4338ca',
          '800': '#3730a3',
          '900': '#312e81',
        },
        background: {
          body: '#20212c',
          surface: '#2b2c37',
          level1: '#20212c',
        },
        text: {
          primary: '#fff',
        },
      },
    },
  },
})
