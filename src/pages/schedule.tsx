import React from "react"
import styled from "styled-components"
import { graphql, PageProps } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Img from "gatsby-image"

import { device, size } from "../shared/utils/styles"

import Layout from "../components/Layout"
import Section from "../shared/components/Section"
import Content from "../shared/components/Content"

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

const CalendarContent = styled(Content)`
  .month {
    display: none;

    @media ${device.md} {
      display: block;
    }
  }

  .agenda {
    @media ${device.md} {
      display: none;
    }
  }

  text-align: center;
`

const Schedule = () => {
  return (
    <>
      <GatsbySeo title="Schedule" />
      <Layout>
        <Section>
          <PageIntro>
            <h1>Our practice and events schedule</h1>
            <p>Please check our schedule before visiting our dojo.</p>
            <hr />
          </PageIntro>
        </Section>
        <Section>
          <CalendarContent>
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=am1vazVwN3Jyb3Y4cm9uazczM2U1N3Z1amNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F4511E&amp;showTitle=0&amp;showNav=1&amp;showTabs=0"
              className="month"
              style={{ borderWidth: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
            ></iframe>
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=am1vazVwN3Jyb3Y4cm9uazczM2U1N3Z1amNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F4511E&amp;showTitle=0&amp;showNav=1&amp;showTabs=0&amp;mode=AGENDA"
              className="agenda"
              style={{ borderWidth: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </CalendarContent>
        </Section>
      </Layout>
    </>
  )
}

export default Schedule
