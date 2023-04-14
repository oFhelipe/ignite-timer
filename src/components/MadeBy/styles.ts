import styled from 'styled-components'

export const MadeByContainer = styled.div`
  position: absolute;
  z-index: 99999;
  background-color: ${(props) => props.theme['gray-800']};
  padding: 1rem;
  border-radius: 8px;
  bottom: 1rem;
  right: 1.8rem;
`
