import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:3003/api/graphql',
  documents: ['graphql/**/*.ts*'],
  generates: {
    './graphql/__generated__/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql'
      },
      plugins: [
        // 'typescript',
        // 'typescript-operations'
      ],
      config: {
        // flattenGeneratedTypes: true,
        // flattenGeneratedTypesIncludeFragments: true,
        // exportFragmentSpreadSubTypes: true
      }
    }
  },
  ignoreNoDocuments: true
}

export default config
