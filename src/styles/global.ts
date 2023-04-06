import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['green-500']};
    border-radius: 2px;
  }

  body {
    background: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};
    -webkit-font-smoothing: antialiased;
  }

  body, input-security, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  * {
    scrollbar-width: auto;
    scrollbar-color: ${({ theme }) =>
      theme['gray-600'] + ' ' + theme['gray-900']}
  }

  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme['gray-900']};
    border-radius: 9px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme['gray-600']};
    border-radius: 9px;
    border: 0px solid theme['white'];
  }

`
