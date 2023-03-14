import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>Votify API</span>,
  project: {
    link: 'https://github.com/stefanusong/votify-api',
  },
  docsRepositoryBase: 'https://github.com/stefanusong/votify-api',
  footer: {
    text: 'Votify API Docs',
  },
  feedback: {
    content: "Send me a feedback →"
  },
  editLink: {
    text: null
  },
  gitTimestamp: null,
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: 'Votify'
      }
    }
  },
  primaryHue: 211
}

export default config