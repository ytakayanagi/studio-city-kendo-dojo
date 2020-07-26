import React from "react"
import styled from "styled-components"
import { graphql, PageProps } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Img from "gatsby-image"

import { device, size } from "../shared/utils/styles"

import Layout from "../components/Layout"
import Section from "../shared/components/Section"
import Content from "../shared/components/Content"

export const query = graphql`
  query {
    file(relativePath: { eq: "about-photo.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
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
  }
}

const PageIntro = styled(Content)`
  text-align: center;
  max-width: ${size.md};

  hr {
    width: 140px;
    height: 4px;
    background: #c99a05;
    margin-top: 40px;
  }
`

const LeftRightContent = styled(Content)`
  @media ${device.lg} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
    align-items: center;
  }
`

const About = ({ data }: PageProps & PageQuery) => {
  const aboutImage = [data.file.childImageSharp.fluid]
  return (
    <>
      <GatsbySeo title="About" />
      <Layout>
        <Section>
          <PageIntro>
            <h1>What is Kendo?</h1>
            <p>
              Kendo (剣道 Kendō), meaning “way of the sword”, is a modern
              Japanese martial art of sword-fighting based on traditional
              swordsmanship (Kenjutsu) which originated with the samurai class
              of feudal Japan.
            </p>
            <hr />
          </PageIntro>
        </Section>
        <Section>
          <LeftRightContent>
            <Img fluid={aboutImage} />
            <div>
              <p>
                Bridges Academy, formerly Osaka Sangyo University of Los
                Angeles, is home to Studio City Kendo Dojo which is also know as
                “OSULA”. Nakashima Sensei, 7th-dan and Takei Sensei, 5th-dan are
                OSULA founding Sensei. Along with the other dojo Sensei and
                instructors, they work together to provide not just a solid
                understanding of kendo basics and the skills necessary for rank
                advancement, National and International competition but to help
                individuals develop a strong mind and body, and respect for
                others.
              </p>
              <p>
                Studio City Kendo Dojo is a recognized member of both the
                Southern California Kendo Organization (SCKO) the All United
                States Kendo Federation (AUSKF), and the International Kendo
                Federation (FIK). All grades and/or ranks you achieve will be
                recognized by other dojos or organizations at both National and
                International levels.
              </p>
            </div>
          </LeftRightContent>
        </Section>
      </Layout>
    </>
  )
}

export default About
