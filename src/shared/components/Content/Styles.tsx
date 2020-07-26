import styled from "styled-components"

import { device, size } from "../../utils/styles"

export const StyledContent = styled.div`
  display: block;
  margin: 0 auto;
  padding: 0 4vw;
  max-width: ${size.sm};

  @media ${device.lg} {
    max-width: ${size.xl};
  }
`
