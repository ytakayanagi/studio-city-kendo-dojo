import React from "react"
import styled from "styled-components"

import { size } from "../../utils/styles"

const StyledDivider = styled.hr`
  width: 100%;
  margin: 0 auto;
  background: #dfe1e5;
  height: 2px;
  border: none;
  max-width: ${size.xl};
  text-align: center;
`

const Divider: React.FC = () => <StyledDivider />

export default Divider
