import { useState } from 'react'
import { Trash2, Mail, Phone, MessageSquare, Users, ArrowUpDown } from 'lucide-react'

function ContactList({ contacts, onDeleteContact }) {
  const [sortBy, setSortBy] = useState('date')

  const handleSort = () => {
    setSortBy(prev => prev === 'date' ? 'name' : 'date')
  }

  const sortedContacts = [...contacts].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name)
    }
    return new Date(b.createdAt) - new Date(a.createdAt)
  })

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-8 shadow-xl">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-white">
          <Users size={24} />
          Contacts ({contacts.length})
        </h2>
        <button 
          className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-gray-300 text-sm transition-all hover:bg-zinc-800 hover:border-purple-500 hover:text-purple-500"
          onClick={handleSort}
        >
          <ArrowUpDown size={18} />
          Sort by {sortBy === 'date' ? 'Name' : 'Date'}
        </button>
      </div>

      {contacts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-8 text-gray-600 text-center gap-4">
          <Users size={64} strokeWidth={1} />
          <p className="text-xl font-medium text-gray-500">No contacts yet</p>
          <span className="text-sm">Add your first contact using the form</span>
        </div>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {sortedContacts.map((contact) => (
            <div 
              key={contact._id} 
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 transition-all hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 animate-fade-in"
            >
              <div className="flex justify-between items-start mb-4 gap-4">
                <h3 className="text-xl font-semibold text-white">{contact.name}</h3>
                <button 
                  className="p-2 bg-transparent rounded-md text-gray-500 transition-all hover:text-red-500 hover:scale-105 flex items-center justify-center"
                  onClick={() => onDeleteContact(contact._id)}
                  title="Delete contact"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-3 mb-4">
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <Mail size={16} className="flex-shrink-0 mt-0.5 text-purple-500" />
                  <a href={`mailto:${contact.email}`} className="text-gray-400 hover:text-purple-500 transition-colors break-all">
                    {contact.email}
                  </a>
                </div>

                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <Phone size={16} className="flex-shrink-0 mt-0.5 text-purple-500" />
                  <a href={`tel:${contact.phone}`} className="text-gray-400 hover:text-purple-500 transition-colors">
                    {contact.phone}
                  </a>
                </div>

                {contact.message && (
                  <div className="flex items-start gap-3 text-gray-400 text-sm">
                    <MessageSquare size={16} className="flex-shrink-0 mt-0.5 text-purple-500" />
                    <p className="leading-relaxed text-gray-500">{contact.message}</p>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-zinc-800">
                <span className="text-xs text-gray-600">{formatDate(contact.createdAt)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ContactList
