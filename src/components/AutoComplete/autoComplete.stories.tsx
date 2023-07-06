import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import AutoComplete, { DataSourceType } from './autoComplete'
import { parameters } from '@/utils/storybook-utils'

interface CustomProps {
  value: string
  number: number
}

interface GithubUserProps {
  login: string
  url: string
  avatar_url: string
}

const autoCompleteMeta: Meta<typeof AutoComplete> = {
  title: 'Data Entry/AutoComplete',
  component: AutoComplete,
  decorators: [
    Story => (
      <div style={{ width: '350px', paddingBottom: '200px' }}>
        <Story />
      </div>
    )
  ]
}

export default autoCompleteMeta

type Story = StoryObj<typeof AutoComplete>

const simpleAutoCompleteCode = `
import { useState } from 'react'
import { AutoComplete } from '@a-front-end-project/a-ui'

const App = () => {
  const [value, setValue] = useState('')
  const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat)
  })
  const handleFetch = (query: string) => {
    return !query
      ? []
      : [mockVal(query), mockVal(query, 2), mockVal(query, 3)]
  }
  const handleSelect = (item: DataSourceType) => {
    setValue(item.value)
  }
  return (
    <AutoComplete
      value={value}
      fetchSuggestions={handleFetch}
      onSelect={handleSelect}
      placeholder="Simple AutoComplete"
    />
  )
}
`

export const SimpleAutoComplete: Story = {
  render: args => {
    const [value, setValue] = useState('')
    const mockVal = (str: string, repeat = 1) => ({
      value: str.repeat(repeat)
    })
    const handleFetch = (query: string) => {
      return !query
        ? []
        : [mockVal(query), mockVal(query, 2), mockVal(query, 3)]
    }
    const handleSelect = (item: DataSourceType) => {
      setValue(item.value)
    }
    return (
      <AutoComplete
        {...args}
        value={value}
        fetchSuggestions={handleFetch}
        onSelect={handleSelect}
        placeholder="Simple AutoComplete"
      />
    )
  },
  parameters: parameters({ code: simpleAutoCompleteCode })
}

const customAutoCompleteCode = `
import { useState } from 'react'
import { AutoComplete } from '@a-front-end-project/a-ui'

const App = () => {
  const [value, setValue] = useState('')
  const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat),
    number: Math.floor(Math.random() * 1000)
  })
  const handleFetch = (query: string) => {
    return !query
      ? []
      : [mockVal(query), mockVal(query, 2), mockVal(query, 3)]
  }
  const renderOption = (item: DataSourceType) => {
    const itemWithNumber = item as DataSourceType<CustomProps>
    return (
      <>
        <b>Name: {itemWithNumber.value}</b>
        <span> - </span>
        <span>Number: {itemWithNumber.number}</span>
      </>
    )
  }

  const handleSelect = (item: DataSourceType) => {
    setValue(item.value)
  }

  return (
    <AutoComplete
      value={value}
      fetchSuggestions={handleFetch}
      placeholder="Custom AutoComplete"
      renderOption={renderOption}
      onSelect={handleSelect}
    />
  )
}
`

export const CustomAutoComplete: Story = {
  render: args => {
    const [value, setValue] = useState('')
    const mockVal = (str: string, repeat = 1) => ({
      value: str.repeat(repeat),
      number: Math.floor(Math.random() * 1000)
    })
    const handleFetch = (query: string) => {
      return !query
        ? []
        : [mockVal(query), mockVal(query, 2), mockVal(query, 3)]
    }
    const renderOption = (item: DataSourceType) => {
      const itemWithNumber = item as DataSourceType<CustomProps>
      return (
        <>
          <b>Name: {itemWithNumber.value}</b>
          <span> - </span>
          <span>Number: {itemWithNumber.number}</span>
        </>
      )
    }
    const handleSelect = (item: DataSourceType) => {
      setValue(item.value)
    }
    return (
      <AutoComplete
        {...args}
        value={value}
        fetchSuggestions={handleFetch}
        placeholder="Custom AutoComplete"
        renderOption={renderOption}
        onSelect={handleSelect}
      />
    )
  },
  parameters: parameters({ code: customAutoCompleteCode })
}

const ajaxAutoCompleteCode = `
import { useState } from 'react'
import { AutoComplete } from '@a-front-end-project/a-ui'

const App = () => {
  const [value, setValue] = useState('')
  const handleFetch = (query: string) => {
    return fetch(\`https://api.github.com/search/users?q=\${query}\`)
      .then(res => res.json())
      .then(({ items }) => {
        return (
          items
            .slice(0, 10)
            .map((item: any) => ({ value: item.login, ...item }))
        )
      })
  }

  const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>
    return (
      <>
        <b>Name: {itemWithGithub.value}</b>
        <span>url: {itemWithGithub.url}</span>
      </>
    )
  }
  
  const handleSelect = (item: DataSourceType) => {
    setValue(item.value)
  }

  return (
    <AutoComplete
      value={value}
      fetchSuggestions={handleFetch}
      placeholder="Ajax AutoComplete"
      renderOption={renderOption}
      onSelect={handleSelect}
    />
  )
}
`

export const AjaxAutoComplete: Story = {
  render: args => {
    const handleFetch = (query: string) => {
      return fetch(`https://api.github.com/search/users?q=${query}`)
        .then(res => res.json())
        .then(({ items }) => {
          return (
            items
              .slice(0, 10)
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              .map((item: any) => ({ value: item.login, ...item }))
          )
        })
    }

    const renderOption = (item: DataSourceType) => {
      const itemWithGithub = item as DataSourceType<GithubUserProps>
      return (
        <>
          <b>Name: {itemWithGithub.value}</b>
          <span>url: {itemWithGithub.url}</span>
        </>
      )
    }

    return (
      <AutoComplete
        {...args}
        fetchSuggestions={handleFetch}
        placeholder="Ajax AutoComplete"
        renderOption={renderOption}
      />
    )
  },
  parameters: parameters({ code: ajaxAutoCompleteCode })
}
