import { makeStyles, TextField } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  }
}))

function SearchBar({ searchText, setSearchText }) {
  const classes = useStyles()
  return (
    <TextField
      onChange={e => setSearchText(e.target.value)}
      value={searchText}
      variant="filled"
      label="Search..."
    />
  )
}

export default SearchBar