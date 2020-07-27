import React from "react"
import styled from "styled-components"
import { graphql, PageProps } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Img from "gatsby-image"

import { device, size } from "../shared/utils/styles"

import Layout from "../components/Layout"
import Section from "../shared/components/Section"
import Content from "../shared/components/Content"
import Button from "../shared/components/Button"

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

const ContactContent = styled(Content)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 40px;

  form {
    display: flex;
    flex-direction: column;

    label {
      display: inline-block;
      margin: 10px 0;
      font-weight: bold;
    }
    input,
    textarea {
      display: inline-block;
      padding: 15px;
      border-radius: 4px;
      border: 1px solid #696969;
    }
    textarea {
      height: 120px;
      margin-bottom: 20px;
    }
  }
`

const Contact = () => {
  return (
    <>
      <GatsbySeo title="About" />
      <Layout>
        <Section>
          <PageIntro>
            <h1>Get in touch with us</h1>
            <p>Feel free to contact us regarding about Kendo.</p>
            <hr />
          </PageIntro>
        </Section>
        <Section>
          <ContactContent>
            <form
              action="https://getform.io/f/fd2bd953-1782-4dc3-92e6-0cfb3b7180e5"
              method="POST"
            >
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
              />
              <label>Name</label>
              <input type="text" name="name" />
              <label>Message</label>
              <textarea name="message"></textarea>
              <Button type="submit">Send</Button>
            </form>
            <div>
              <h4>Dojo Location:</h4>
              <p>
                Studio City Kendo Dojo
                <br />
                3921 Laurel Canyon Blvd
                <br />
                Studio City, CA 91604
              </p>
              <h4>Open Hours:</h4>
              <p>Friday (7:30 - 10:00 PM)</p>
            </div>
          </ContactContent>
        </Section>
      </Layout>
    </>
  )
}

export default Contact
