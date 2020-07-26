import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Img from "gatsby-image"
import { FaInfoCircle } from "react-icons/fa"
import { Tooltip } from "react-tippy"

import { device, size } from "../shared/utils/styles"

import Layout from "../components/Layout"
import Section from "../shared/components/Section"
import Content from "../shared/components/Content"
import Divider from "../shared/components/Divider"

export const query = graphql`
  query {
    file(relativePath: { eq: "join-image.jpg" }) {
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

const FeeContent = styled(Content)`
  h2 {
    margin: 0;
  }

  table {
    width: 100%;
    border-spacing: 0;

    thead th {
      padding: 10px 20px 10px 0;
      border-bottom: 2px solid rgb(229, 232, 237);
      text-align: left;
    }

    tbody tr td {
      padding: 10px 20px 10px 0;
      border-top: 1px solid rgb(229, 232, 237);
    }
  }
`

const Membership = ({ data }: PageQuery) => {
  const joinImage = [data.file.childImageSharp.fluid]
  return (
    <>
      <GatsbySeo title="Membership" />
      <Layout>
        <Section>
          <PageIntro>
            <h1>Join us to have a unique experience</h1>
            <p>
              Kendo is one of the few martial art that does not require you to
              be young or old.
            </p>
            <hr />
          </PageIntro>
        </Section>
        <Section>
          <LeftRightContent>
            <div>
              <h2>How to join our dojo</h2>
              <p>
                We recommend you trying out Kendo before joining. We offer free
                trial session for the first two weeks. If you decide to join us,
                we will need you to sign documents and pay membership fees so
                that you can participate in exams and tournaments.
              </p>
              <p></p>
            </div>
            <Img fluid={joinImage} />
          </LeftRightContent>
        </Section>
        <Divider />
        <Section>
          <FeeContent>
            <h2>Membership Fees</h2>
            <p>We do offer discounts to families.</p>
            <table>
              <thead>
                <tr>
                  <th>Age</th>
                  <th>Tuition</th>
                  <th>Registration Fee</th>
                  <th>
                    SCKO Annual Membership{" "}
                    <Tooltip
                      title="Welcome to React"
                      arrow={true}
                      position="top"
                      trigger="mouseenter"
                    >
                      <FaInfoCircle
                        size="0.8em"
                        color="#666666"
                        style={{ cursor: "pointer" }}
                      />
                    </Tooltip>
                  </th>
                  <th>
                    AUSKF Annual Membership{" "}
                    <FaInfoCircle size="0.8em" color="#666666" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>17yrs and under</td>
                  <td>$60 (Quarterly)</td>
                  <td>$20</td>
                  <td>$20 (Annualy)</td>
                  <td>$25 (Annualy)</td>
                </tr>
                <tr>
                  <td>18yrs and over</td>
                  <td>$75 (Quarterly)</td>
                  <td>$20</td>
                  <td>$35 (Annualy)</td>
                  <td>$40 (Annualy)</td>
                </tr>
              </tbody>
            </table>
          </FeeContent>
        </Section>
      </Layout>
    </>
  )
}

export default Membership
