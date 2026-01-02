import { useState } from 'react'
import { UserPlus, Mail, Phone, MessageSquare } from 'lucide-react'

function ContactForm({ onAddContact }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Invalid email format'
      }
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (formData.phone.length < 10) {
      newErrors.phone = 'Phone must be at least 10 digits'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    const success = await onAddContact(formData)
    
    if (success) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setErrors({})
    }
    
    setIsSubmitting(false)
  }

  const isFormValid = formData.name.trim() && 
                      formData.email.trim() && 
                      formData.phone.trim() &&
                      Object.keys(errors).length === 0

  return (
    <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-8 shadow-xl">
      <h2 className="text-2xl font-semibold mb-6 text-white">Add New Contact</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="flex items-center gap-2 font-medium text-gray-300 text-sm">
            <UserPlus size={18} />
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`px-3 py-2 bg-zinc-900 border rounded-lg text-white transition-all ${
              errors.name ? 'border-red-500' : 'border-zinc-800 focus:border-purple-500'
            } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
            placeholder="Enter full name"
          />
          {errors.name && <span className="text-red-500 text-sm -mt-1">{errors.name}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="flex items-center gap-2 font-medium text-gray-300 text-sm">
            <Mail size={18} />
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`px-3 py-2 bg-zinc-900 border rounded-lg text-white transition-all ${
              errors.email ? 'border-red-500' : 'border-zinc-800 focus:border-purple-500'
            } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
            placeholder="email@example.com"
          />
          {errors.email && <span className="text-red-500 text-sm -mt-1">{errors.email}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="flex items-center gap-2 font-medium text-gray-300 text-sm">
            <Phone size={18} />
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`px-3 py-2 bg-zinc-900 border rounded-lg text-white transition-all ${
              errors.phone ? 'border-red-500' : 'border-zinc-800 focus:border-purple-500'
            } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
            placeholder="+1234567890"
          />
          {errors.phone && <span className="text-red-500 text-sm -mt-1">{errors.phone}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="flex items-center gap-2 font-medium text-gray-300 text-sm">
            <MessageSquare size={18} />
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white transition-all focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 placeholder:text-gray-600 resize-none"
            placeholder="Optional message..."
          />
        </div>

        <button 
          type="submit" 
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-zinc-800 disabled:shadow-none disabled:translate-y-0 active:translate-y-0 mt-2"
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting ? 'Adding...' : 'Add Contact'}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
