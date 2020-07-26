import React from "react"
import styled from "styled-components"
import { graphql, PageProps } from "gatsby"
import Img from "gatsby-image"

import { device, font, text, size } from "../shared/utils/styles"

import Layout from "../components/Layout"
import Section from "../shared/components/Section"
import Content from "../shared/components/Content"
import Button from "../shared/components/Button"
import Divider from "../shared/components/Divider"

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero-image.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    auskfLogo: file(relativePath: { eq: "auskf-logo.jpg" }) {
      childImageSharp {
        fixed(height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    sckoLogo: file(relativePath: { eq: "scko-logo.jpg" }) {
      childImageSharp {
        fixed(height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

type PageQuery = {
  data: {
    file: {
      childImageSharp: {
        fluid?: any
      }
    }
    heroImage: {
      childImageSharp: {
        fluid?: any
      }
    }
    auskfLogo: {
      childImageSharp: {
        fixed?: any
      }
    }
    sckoLogo: {
      childImageSharp: {
        fixed?: any
      }
    }
  }
}

const HeroContent = styled(Content)`
  display: grid;
  @media ${device.md} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    align-items: center;
  }
`

const HeroSubtitle = styled.div`
  text-transform: uppercase;
  ${text.sub1}
  ${font.robotoBold}
`

const HeroTitle = styled.h2`
  ${text.h3}
  ${font.robotoBold}
  margin-top: 20px;
  margin-bottom: 0;
`

const HeroButton = styled(Button)`
  width: 100%;

  @media ${device.md} {
    width: inherit;
  }
`

const OrganizationContent = styled(Content)`
  p {
    margin: 0 auto;
    max-width: ${size.sm};
    text-align: center;
    margin-bottom: 40px;
  }
`

const OrganizationTitle = styled.h4`
  margin: 0 0 20px;
  ${text.h4}
  ${font.robotoBold}
    text-align: center;
`

const OrganizationLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

const IndexPage = ({ data }: PageProps & PageQuery) => {
  const heroImage = [data.heroImage.childImageSharp.fluid]
  const auskfLogo = [data.auskfLogo.childImageSharp.fixed]
  const sckoLogo = [data.sckoLogo.childImageSharp.fixed]

  return (
    <Layout>
      <Section>
        <HeroContent>
          <div>
            <HeroSubtitle>Way of the sword</HeroSubtitle>
            <HeroTitle>Kendo is a traditional Japanese martial art</HeroTitle>
            <p>
              It is not just a sport wearing heavy armor and weilding bamboo
              sword, but a martial art that involves developing your mind, body
              and spirit. Our dojo welcomes all ages and it's never too late to
              start Kendo.
            </p>
            <HeroButton>Learn More</HeroButton>
          </div>
          <Img fluid={heroImage} />
        </HeroContent>
      </Section>
      <Divider />
      <Section>
        <Content>
          <OrganizationContent>
            <OrganizationTitle>
              We are proud to be the member of AUSKF and SCKO
            </OrganizationTitle>
            <p>
              By being part of{" "}
              <a href="https://www.auskf.org/" target="_blank">
                All United States Kendo Federation
              </a>{" "}
              and{" "}
              <a href="https://www.socalkendo.org/" target="_blank">
                Southern California Kendo Organization
              </a>
              , we are able to participate in various tournaments and take
              promotional exams to advance higher ranks.
            </p>
            <OrganizationLogo>
              <Img fixed={auskfLogo} />
              <Img fixed={sckoLogo} />
            </OrganizationLogo>
          </OrganizationContent>
        </Content>
      </Section>
    </Layout>
  )
}

export default IndexPage
