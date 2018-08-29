import React from 'react'
import Layout from '../components/layout'
import { Section, Container } from '../components/common'

const NotFoundPage = () => (
  <Layout>
    <Section lightBackground>
      <Container maxWidth="900px">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Section>
  </Layout>
)

export default NotFoundPage
