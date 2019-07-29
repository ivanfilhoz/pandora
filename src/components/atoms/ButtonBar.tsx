import * as React from 'react'

interface IProps {
  buttons: React.ReactNode[]
}

export const ButtonBar: React.FunctionComponent<IProps> = ({ buttons }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      margin: -6
    }}
  >
    {buttons.map(button => (
      <div
        style={{
          padding: 6
        }}
      >
        {button}
      </div>
    ))}
  </div>
)
