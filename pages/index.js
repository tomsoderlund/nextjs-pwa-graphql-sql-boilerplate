import PageHead from '../components/PageHead'
import { config } from '../config/config'

const IndexPage = function (property) {
  return <main>
    <PageHead path='/index' />

    <h1>{config.appName}</h1>

  </main>
}

export default IndexPage
