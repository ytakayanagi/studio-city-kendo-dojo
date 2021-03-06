import React from "react"
import styled from "styled-components"

import { size } from "../../utils/styles"

const StyledDivider = styled.hr`
  width: 100%;
  margin: 0 auto;
  background: #c6beb8;
  height: 1px;
  border: none;
  text-align: center;
`

const Divider: React.FC = () => <StyledDivider />

export default Divider
