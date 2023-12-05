export const StylesSelect = {
  control: (styles: any, { isFocused }: any) => ({
    ...styles,
    border: isFocused ? `1px solid #2e2e2e` : `1px solid #979797`,
    boxShadow: 'none',
    borderRadius: '4px',
    width: '15rem',
    div: {
      color: isFocused ? '#2e2e2e' : '#979797',
    },
    span: {
      display: 'none',
    },
    ':hover': {
      border: `1px solid #2e2e2e`,
      boxShadow: 'none',
      color: '#2e2e2e',
      div: {
        color: '#2e2e2e',
      },
    },
  }),
  option: (styles: any, { isSelected }: any) => ({
    ...styles,
    ':hover': {
      backgroundColor: '#eaeaea',
    },
    backgroundColor: isSelected ? '#eaeaea' : '#fff',
  }),
}
