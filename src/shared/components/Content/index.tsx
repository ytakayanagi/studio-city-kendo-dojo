import React from "react"

import { StyledContent } from "./Styles"

type Props = {
  className?: string
  children: React.ReactNode
}

const Content: React.FC<Props> = ({ className, children }: Props) => (
  <StyledContent className={className}>{children}</StyledContent>
)

export default Content
