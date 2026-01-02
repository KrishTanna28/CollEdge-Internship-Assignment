import { useState, useEffect } from 'react'
import axios from 'axios'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

const API_URL = `${import.meta.env.VITE_API_URL}/api/contacts`

function App() {
  const [contacts, setContacts] = useState([])
  const [successMessage, setSuccessMessage] = useState('')

  // Fetch contacts on component mount
  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      const response = await axios.get(API_URL)
      if (response.data.success) {
        setContacts(response.data.data)
      }
    } catch (error) {
      console.error('Error fetching contacts:', error)
    }
  }

  const handleAddContact = async (contactData) => {
    try {
      const response = await axios.post(API_URL, contactData)
      if (response.data.success) {
        setContacts([response.data.data, ...contacts])
        setSuccessMessage('Contact added successfully!')
        setTimeout(() => setSuccessMessage(''), 3000)
        return true
      }
    } catch (error) {
      console.error('Error adding contact:', error)
      return false
    }
  }

  const handleDeleteContact = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`)
      if (response.data.success) {
        setContacts(contacts.filter(contact => contact._id !== id))
        setSuccessMessage('Contact deleted successfully!')
        setTimeout(() => setSuccessMessage(''), 3000)
      }
    } catch (error) {
      console.error('Error deleting contact:', error)
    }
  }

  return (
    <div className="min-h-screen bg-black px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 pb-8 border-b-2 border-zinc-900">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
            Contact Management
          </h1>
          <p className="text-gray-400 text-lg">Manage your contacts efficiently</p>
        </header>

        {successMessage && (
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-3 rounded-lg mb-8 text-center animate-fade-in">
            {successMessage}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-8">
          <ContactForm onAddContact={handleAddContact} />
          <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
        </div>
      </div>
    </div>
  )
}

export default App
