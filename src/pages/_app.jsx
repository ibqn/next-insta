import { RecoilRoot } from 'recoil'
import 'styles/globals.css'

import '@fontsource/roboto/400.css'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
