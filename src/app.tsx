import { useState, useEffect } from 'preact/hooks'

export function App() {
  const [cep, setCep] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [district, setDistrict] = useState("")
  const [state, setState] = useState("")

  useEffect( () => {
    if (cep.length === 8){
      let validCep = `${cep.substr(0,5)}-${cep.substr(5)}.json`
      let url = `https://cdn.apicep.com/file/apicep/${validCep}`
      fetch(url, {mode: 'cors'})
      .then(response => response.json())
      .then(data => {
        setAddress(data.address)
        setCity(data.city)
        setDistrict(data.district)
        setState(data.state)
      })
      .catch(err => {return err})
    }
  }, [cep]);

  return (
    <>
      <h1>Form</h1>
      <div>
        <input type="number" value={cep} onChange={(e:any) => setCep(e.target.value)}/>
        <input type="text" value={address} onChange={(e:any) => setAddress(e.target.value)}/>
      </div>
      <div>
        <input type="text" value={city} onChange={(e:any) => setCity(e.target.value)}/>
        <input type="text" value={district} onChange={(e:any) => setDistrict(e.target.value)}/>
        <input type="text" value={state} onChange={(e:any) => setState(e.target.value)}/>
      </div>
    </>
  )
}
