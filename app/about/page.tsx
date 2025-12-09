"use client"
import { Card } from "@/components/ui/card"
import { Award, Phone, Mail, MapPin, Eye, Target, Heart, CheckCircle, Star, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
              <Link href="/about" className="text-blue-900 font-bold transition-colors duration-200 hover:scale-105">
                About Us
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200 hover:scale-105"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200 hover:scale-105"
              >
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
                <Link href="/about" className="text-left text-blue-900 font-bold transition-colors">
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-left text-gray-700 hover:text-blue-900 font-medium transition-colors"
                >
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="text-left text-gray-700 hover:text-blue-900 font-medium transition-colors"
                >
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
            <h1 className="text-5xl font-bold text-blue-900 mb-6">About PT Gardatama Purba Jaya</h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Kami adalah penyedia jasa keamanan berlisensi yang bekerja sama secara resmi dengan Polda Metro Jaya,
              berkomitmen untuk memberikan perlindungan profesional dan solusi tenaga kerja yang komprehensif di seluruh
              wilayah Jakarta.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Left - Image */}
            <div className="animate-fade-in">
              <img
                src="/gardatamaui.jpg"
                alt="Professional Security Team"
                className="w-full h-[600px] object-cover rounded-2xl shadow-xl"
              />
            </div>

            {/* Right - Content */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-blue-600 shadow-lg">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  PT Gardatama Purba Jaya merupakan perusahaan swasta yang bergerak di bidang Pengamanan Swakarsa
                  (Security Service) di bawah pembinaan Polda Metro Jaya. PT Gardatama Purba Jaya telah melayani
                  kebutuhan anda sejak tahun 1997.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Perusahaan kami bergerak secara profesional dalam memberikan pelayanan dan kebutuhan Perusahaan Anda
                  dengan kualitas serta mutu terbaik. Pelayanan yang prima di lingkup kerja kami terhadap pemberi kerja
                  (user) maupun pihak ketiga, tentu akan menjadi nilai tambah bagi perusahaan anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Motto */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Vision, Mission & Motto</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Komitmen kami dalam memberikan layanan terbaik dengan visi, misi, dan motto yang jelas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Eye className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Menjadi penyedia tenaga ahli dan jasa yang terdepan sesuai dengan kebutuhan pengguna.
              </p>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-yellow-50 to-yellow-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <div className="text-gray-700 text-lg leading-relaxed space-y-2">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Menyediakan layanan keamanan yang menyeluruh</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Menjaga kualitas tenaga kerja yang memadai</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Berlaku pada keputusan penggunaan melalui perlindungan dan inovasi berkelanjutan</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Motto</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                "Profesionalisme kami menjadi tombak penilaian publik terhadap perusahaan Anda."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Licensed & Certified */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Licensed & Certified</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Official cooperation and licensing ensure our compliance with national security standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Official Licensing</h3>
              <p className="text-gray-700 leading-relaxed">
                Kami berlisensi dan personel resmi mengacu kepatuhan kami terhadap standar keamanan nasional.
              </p>
            </Card>

            <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Professional Team</h3>
              <p className="text-gray-700 leading-relaxed">
                Kami terdiri dan personel resmi mengacu kepatuhan kami terhadap standar keamanan nasional.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Recruitment Requirements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Persyaratan Rekrutmen</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Kami mencari profesional yang berdedikasi dan memenuhi standar kami untuk keunggulan dalam keamanan.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-xl animate-fade-in-up">
              <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Official Licensing Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Warga Negara Indonesia (WNI) dengan KTP yang berlaku</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Tinggi badan minimal 165 cm untuk pria, 155 cm untuk wanita</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Tidak memiliki catatan kriminal (SKCK)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Berbahasa Indonesia dalam sistem shift termasuk malam dan akhir pekan
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Usia antara 18-45 tahun</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Sehat jasmani dan rohani</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Tidak memiliki latar atau tidak yang terlihat</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Pendidikan minimal SMA atau sederajat</span>
                  </div>
                </div>
              </div>
            </Card>
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
