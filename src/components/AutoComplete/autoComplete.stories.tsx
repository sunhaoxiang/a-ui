import { Meta, StoryObj } from '@storybook/react'
import AutoComplete, { DataSourceType } from './autoComplete

interface LakersPlayerProps {
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
  ],
  tags: ['autodocs']
}

export default autoCompleteMeta

type Story = StoryObj<typeof AutoComplete>

export const SimpleAutoComplete: Story = {
  render: args => {
    const lakers = [
      'bradley',
      'pope',
      'caruso',
      'cook',
      'cousins',
      'james',
      'AD',
      'green',
      'howard',
      'kuzma',
      'McGee',
      'rando'
    ]
    const handleFetch = (query: string) => {
      return lakers
        .filter(name => name.includes(query))
        .map(name => ({ value: name }))
    }
    return (
      <AutoComplete
        {...args}
        fetchSuggestions={handleFetch}
        placeholder="Simple AutoComplete"
      />
    )
  }
}

export const CustomAutoComplete: Story = {
  render: args => {
    const lakersWithNumber = [
      { value: 'bradley', number: 11 },
      { value: 'pope', number: 1 },
      { value: 'caruso', number: 4 },
      { value: 'cook', number: 2 },
      { value: 'cousins', number: 15 },
      { value: 'james', number: 23 },
      { value: 'AD', number: 3 },
      { value: 'green', number: 14 },
      { value: 'howard', number: 39 },
      { value: 'kuzma', number: 0 }
    ]
    const handleFetch = (query: string) => {
      return lakersWithNumber.filter(player => player.value.includes(query))
    }
    const renderOption = (item: DataSourceType) => {
      const itemWithNumber = item as DataSourceType<LakersPlayerProps>
      return (
        <>
          <b>Name: {itemWithNumber.value}</b>
          <span>Number: {itemWithNumber.number}</span>
        </>
      )
    }
    return (
      <AutoComplete
        {...args}
        fetchSuggestions={handleFetch}
        placeholder="Custom AutoComplete"
        renderOption={renderOption}
      />
    )
  }
}

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
  }
}
