import Link from 'next/link'
import Layout from '../../components/Layout'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/home">Go home</Link>
      <Link href="/">Go Login</Link>
    </p>
  </Layout>
)

export default AboutPage
