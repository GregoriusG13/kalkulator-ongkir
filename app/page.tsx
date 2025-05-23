'use client'
import { useState } from "react"

export default function Kalkulator() {
  const [jarak, setJarak] = useState(0)
  const [kendaraan, setKendaraan] = useState("pickup")
  const [total, setTotal] = useState(0)

  const tarif = {
    pickup: { perKm: 5500, konsumsi: 1 / 8, tetap: 60000 },
    van: { perKm: 6000, konsumsi: 1 / 10, tetap: 45000 }
  }
  const bbm = 10500

  const hitung = () => {
    const t = tarif[kendaraan]
    const biayaBBM = jarak * t.konsumsi * bbm
    const biayaJasa = jarak * t.perKm
    setTotal(Math.round(biayaBBM + biayaJasa + t.tetap))
  }

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Kalkulator Ongkir</h1>
      <input type="number" value={jarak} onChange={e => setJarak(Number(e.target.value))} placeholder="Jarak (km)" className="border p-2" />
      <div className="my-2">
        <button onClick={() => setKendaraan('pickup')} className={`mr-2 ${kendaraan === 'pickup' ? 'font-bold' : ''}`}>Pick Up</button>
        <button onClick={() => setKendaraan('van')} className={kendaraan === 'van' ? 'font-bold' : ''}>Van</button>
      </div>
      <button onClick={hitung} className="bg-blue-500 text-white px-4 py-2">Hitung</button>
      <div className="mt-4">Total: Rp{total.toLocaleString()}</div>
    </main>
  )
}