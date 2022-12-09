import { useEffect, useState, useRef } from 'react'
import axios from 'axios'

export default function useFetchData(queryDate) {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])

  const firstFetch = useRef(true)

  useEffect(() => {

    if (firstFetch.current) {
      firstFetch.current = false
    }

    setLoading(true)
    setError(false)
    let cancel

    axios({
      method: 'GET',
      url: 'https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&thumbs=true',
      params: { start_date: queryDate.start_date, end_date: queryDate.end_date },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setData(prevData => {
        return [...prevData, ...res.data.reverse()]
      })
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()

  },[queryDate])

    return { loading, error, data, firstFetch }
}
