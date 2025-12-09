"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Users, Award, Phone, Mail, MapPin, CheckCircle, Sparkles, Building, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function ServicesPage() {
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
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200 hover:scale-105"
              >
                About Us
              </Link>
              <Link href="/services" className="text-blue-900 font-bold transition-colors duration-200 hover:scale-105">
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
                <Link
                  href="/about"
                  className="text-left text-gray-700 hover:text-blue-900 font-medium transition-colors"
                >
                  About Us
                </Link>
                <Link href="/services" className="text-left text-blue-900 font-bold transition-colors">
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
            <h1 className="text-5xl font-bold text-blue-900 mb-6">Our Professional Services</h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Solusi keamanan dan tenaga kerja yang komprehensif, disesuaikan dengan kebutuhan bisnis Anda, dengan
              keunggulan profesional dan keandalan tinggi.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Security Guard Services */}
            <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 animate-fade-in-up">
              <div className="mb-6">
                <img
                  src="/security-guard-uniform.png"
                  alt="Security Guard Services"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Security Guard Services</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Personel keamanan profesional untuk fasilitas perumahan, komersial, dan industri dengan sistem
                pengamanan dan patroli 24/7.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Layanan patroli dan pemantauan keamanan 24 jam
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Personel terlatih untuk fasilitas perumahan, komersial dan industri
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Peralatan pengawasan dan sistem komunikasi canggih
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Tanggap darurat dan protokol manajemen insiden
                </li>
              </ul>
              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3">Learn More</Button>
            </Card>

            {/* Cleaning Services */}
            <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 animate-fade-in-up">
              <div className="mb-6">
                <img
                  src="/professional-cleaning-team.png"
                  alt="Cleaning Services"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Cleaning Services</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Layanan kebersihan profesional untuk perkantoran, pabrik, perbelanjaan, dan fasilitas lainnya dengan
                peralatan profesional dan produk ramah lingkungan.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Jadwal pembersihan harian, mingguan, dan bulanan
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Peralatan pembersihan profesional dan produk ramah lingkungan
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Pembersihan khusus untuk kantor, pusat perbelanjaan, dan area industri
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Jaminan kualitas dan pengawasan rutin
                </li>
              </ul>
              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3">Learn More</Button>
            </Card>

            {/* Telephone Operator */}
            <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 animate-fade-in-up">
              <div className="mb-6">
                <img
                  src="/placeholder-rph6k.png"
                  alt="Telephone Operator"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center shadow-lg">
                  <Phone className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Telephone Operator</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Layanan operator telepon yang ramah dan profesional dengan coverage terlatih untuk mengelola komunikasi
                bisnis Anda secara efisien.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Operator terlatih untuk manajemen panggilan yang efisien
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Dukungan multi-bahasa dan komunikasi profesional
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Pengelolaan panggilan, pencatatan pesan, dan pengalihan panggilan efisien
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Integrasi dengan sistem komunikasi yang ada
                </li>
              </ul>
              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3">Learn More</Button>
            </Card>

            {/* Receptionist */}
            <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 animate-fade-in-up">
              <div className="mb-6">
                <img
                  src="/professional-receptionist.png"
                  alt="Receptionist Services"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-800 rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Receptionist</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Layanan resepsionis yang ramah dan profesional untuk menciptakan kesan pertama yang positif bagi
                pengunjung bisnis Anda.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Layanan resepsionis yang ramah dan profesional
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Pendaftaran pengunjung dan manajemen kontrol akses
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Dukungan administratif dan penanganan dokumen
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Menciptakan kesan pertama yang positif untuk bisnis Anda
                </li>
              </ul>
              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3">Learn More</Button>
            </Card>

            {/* Gardening & Landscaping */}
            <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 animate-fade-in-up">
              <div className="mb-6">
                <img
                  src="/landscaping-gardening-team.png"
                  alt="Gardening & Landscaping"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Gardening & Landscaping</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Layanan perawatan taman lengkap termasuk desain taman, pengelolaan tanaman, dan kebersihan area luar
                ruangan.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Pemeliharaan taman secara rutin dan perawatan tanaman
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Desain landscape dan proyek kecantikan luar ruangan
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Manajemen dan perawatan sistem irigasi
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Penanaman musiman dan bertanggung jawab lingkungan
                </li>
              </ul>
              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3">Learn More</Button>
            </Card>

            {/* Factory Manpower */}
            <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 animate-fade-in-up">
              <div className="mb-6">
                <img
                  src="/factory-workers.png"
                  alt="Factory Manpower"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl flex items-center justify-center shadow-lg">
                  <Building className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Factory Manpower</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Solusi tenaga kerja industri yang terampil untuk fasilitas manufaktur dengan personel terlatih dan
                kepatuhan terhadap standar keselamatan kerja.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Personel terlatih untuk operasi manufaktur dan industri
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Kepatuhan terhadap keselamatan dan peraturan kerja
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Solusi tenaga kerja fleksibel sesuai kebutuhan produksi
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  Dukungan untuk kontrol kualitas dan optimalisasi produktivitas
                </li>
              </ul>
              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3">Learn More</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Siap Membantu Bisnis Anda?</h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Hubungi kami hari ini untuk konsultasi gratis dan solusi keamanan khusus yang disesuaikan dengan kebutuhan
              Anda.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {"Dapat Konsiltasi gratis"}
              </Button>
            </Link>
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
