import styled, { css } from 'styled-components'

const EMPTY_CHARACTER = '\u200B'

const TableCell = styled.div.attrs({ role: 'cell' })`
  padding: 8px;
  display: flex;
  height: 100%;
  white-space: nowrap;
  align-items: center;
  justify-content: ${({ align }) => {
    if (align === 'left') return 'flex-start'
    if (align === 'right') return 'flex-end'
    return align
  }};

  ${({ subtle }) =>
    subtle &&
    css`
      color: var(--heading-subtle);
    `};
`

TableCell.defaultProps = {
  children: EMPTY_CHARACTER,
  subtle: false,
  align: 'left',
}

export { TableCell }

const TableHighlight = styled(TableCell)`
  background-color: var(--surface);
`

TableHighlight.defaultProps = {
  children: EMPTY_CHARACTER,
}

TableHighlight.propTypes = {}

export { TableHighlight }

const TableHeader = styled(TableHighlight).attrs({ role: 'columnheader' })`
  color: var(--heading-subtle);
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
`

TableHeader.defaultProps = {
  children: EMPTY_CHARACTER,
}

TableHeader.propTypes = {}

export { TableHeader }

const Table = styled.div.attrs({ role: 'table' })`
  position: relative;
  width: 100%;
  overflow: auto;
  text-align: left;
  font-size: 18px;
  font-weight: 500;
  color: var(--text);
  display: flex;
  flex-direction: row;
  display: grid;
  grid-gap: 6px 0;
  padding-bottom: 8px;
  grid-template-columns: ${({ columns }) => {
    if (Array.isArray(columns)) {
      return columns.join(' ')
    }

    return '1fr '.repeat(columns)
  }};

  ${({ columns }) => {
    const numColumns = Array.isArray(columns) ? columns.length : columns

    return css`
    ${TableCell}:nth-child(${numColumns}n + 1) {
      padding-left: 20px;
    }

    ${TableHighlight}:nth-child(${numColumns}n + 1) {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    ${TableCell}:nth-child(${numColumns}n + ${numColumns}) {
      padding-right: 20px;
    }

    ${TableHighlight}:nth-child(${numColumns}n + ${numColumns}) {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  `
  }};

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% - 4px);
    margin: 0 2px;
    height: 2px;
    background-color: var(--surface);
  }
`

export { Table }
