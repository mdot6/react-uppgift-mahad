import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://kategori-cbc6adfyhwafa3fd.norwayeast-01.azurewebsites.net/api/categories')
        if (!response.ok) throw new Error('Failed to fetch categories')
        const data = await response.json()
        setCategories(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return (
    <div className="container">
      <h1>Bibliotekskategorier</h1>
      
      {loading && <p>Laddar kategorier...</p>}
      {error && <p style={{ color: 'red' }}>Fel: {error}</p>}
      
      {!loading && !error && (
        <div className="categories-grid">
          {categories.length > 0 ? (
            categories.map((category) => (
              <div key={category.id} className="category-card">
                <h2>{category.name}</h2>
                <p>{category.description}</p>
              </div>
            ))
          ) : (
            <p>Inga kategorier hittades</p>
          )}
        </div>
      )}
    </div>
  )
}

export default App