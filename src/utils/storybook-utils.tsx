interface ParametersType {
  language?:
    | 'jsextra'
    | 'jsx'
    | 'json'
    | 'yml'
    | 'md'
    | 'bash'
    | 'css'
    | 'html'
    | 'tsx'
    | 'typescript'
    | 'graphql'
  code: string
}

export const parameters = ({ language = 'tsx', code }: ParametersType) => ({
  docs: {
    source: {
      language,
      code
    }
  }
})
