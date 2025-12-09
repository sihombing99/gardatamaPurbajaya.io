"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert("Thank you for your message! We will get back to you soon.")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img src="/gardatama-logo.png" alt="PT Gardatama Purba Jaya Logo" className="w-12 h-12 object-contain" />
              <div>
                <div className="text-xl font-bold text-blue-900">PT Gardatama</div>
                <div className="text-sm text-gray-600">Purba Jaya</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200 hover:scale-105"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200 hover:scale-105"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200 hover:scale-105"
              >
                Our Services
              </Link>
              <Link href="/contact" className="text-blue-900 font-bold transition-colors duration-200 hover:scale-105">
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-blue-900">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3 pt-4">
                <Link href="/" className="text-left text-gray-700 hover:text-blue-900 font-medium transition-colors">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-left text-gray-700 hover:text-blue-900 font-medium transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-left text-gray-700 hover:text-blue-900 font-medium transition-colors"
                >
                  Our Services
                </Link>
                <Link href="/contact" className="text-left text-blue-900 font-bold transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl font-bold text-blue-900 mb-6">Get in Touch With Us</h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Siap mengamankan bisnis Anda? Hubungi kami hari ini untuk konsultasi gratis dan solusi keamanan yang
              disesuaikan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Phone</h3>
              <p className="text-gray-700 font-semibold">0813-2919-5095</p>
              <p className="text-gray-600 text-sm mt-2">Available 24/7</p>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Email</h3>
              <p className="text-gray-700 font-semibold text-sm">gardatamapurbajaya.company@gmail.com</p>
              <p className="text-gray-600 text-sm mt-2">Response within 24 hours</p>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Address</h3>
              <p className="text-gray-700 font-semibold">Jl. Menyurai Raya Blok F No. 7</p>
              <p className="text-gray-600 text-sm mt-2">Jakarta Barat</p>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-yellow-50 to-yellow-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Hours</h3>
              <p className="text-gray-700 font-semibold">24/7 Available</p>
              <p className="text-gray-600 text-sm mt-2">Emergency support</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <Card className="p-8 bg-white shadow-xl border-0">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Fill out the form below and we'll get back to you as soon as possible with a customized security
                  solution for your needs.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+62 xxx-xxxx-xxxx"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Please describe your security needs or questions in detail..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Map */}
            <div className="animate-fade-in">
              <Card className="p-8 bg-white shadow-xl border-0 h-full">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Location</h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Visit our office for in-person consultations or to discuss your security requirements in detail.
                </p>

                <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4705.112082537795!2d106.76535217499016!3d-6.19105739379653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7a7a2ea0b41%3A0xdaf5c712bea2af3a!2sPJTrans%20(PT.%20Portama%20Jaya%20Transportasi)%20-%20Head%20Office!5e1!3m2!1sid!2sid!4v1755175501783!5m2!1sid!2sid"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-96"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Jl. Menyurai Raya Blok F No. 7, Jakarta Barat</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Office Hours: Monday - Friday, 9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Emergency Support: 24/7 Available</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-3">
                <img
                  src="/gardatama-logo.png"
                  alt="PT Gardatama Purba Jaya Logo"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <div className="text-xl font-bold">PT Gardatama</div>
                  <div className="text-gray-400">Purba Jaya</div>
                </div>
              </Link>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner in security services and manpower supply solutions. Licensed and certified by Polda
                Metro Jaya.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security Guard Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cleaning Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Telephone Operator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Receptionist
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Gardening & Landscaping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Factory Manpower
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-3" />
                  0813-2919-5095
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-3" />
                  gardatamapurbajaya.company@gmail.com
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3" />
                  www.gardatamapurbajaya.co.id
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3" />
                  Jl. Menyurai Raya Blok F No. 7, Jakarta Barat
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PT Gardatama Purba Jaya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
