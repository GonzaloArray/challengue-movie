import { useState } from 'react'

interface State {
  search: string
  alert: string
  onInputChange: (value: string) => void
}

export const useSearch = (): State => {
  const [search, setSearch] = useState('')
  const [alert, setAlert] = useState('')

  const onInputChange = (search: string) => {
    if (search === '') {
      setAlert('No se reconoce un campo vacio')
      return
    }

    if (/^([0-9])*$/.test(search)) {
      setAlert('No se reconoce un campo numerico')
      return
    }

    if (search.length <= 1) {
      setAlert('Ingrese más información sobre la pelicula')
      return
    }

    setSearch(search)
    setAlert('')
  }

  return {
    search,
    alert,
    onInputChange
  }
}
