"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Shield,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Eye,
  Target,
  Heart,
  Building,
  Sparkles,
  Menu,
  X,
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
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
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12">
                <img
                  src="/gardatama-logo.png"
                  alt="PT Gardatama Purba Jaya Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-bold text-blue-900">PT Gardatama</div>
                <div className="text-sm text-gray-600">Purba Jaya</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-blue-900 font-bold transition-colors duration-200 hover:scale-105">
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
                <Link href="/" className="text-left text-blue-900 font-bold transition-colors">
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
      <section
        id="home"
        className="pt-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 min-h-screen flex items-center"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Side - Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">PT Gardatama Purba Jaya</h1>
                <h2 className="text-2xl text-blue-600 font-semibold">Security Services & Manpower Supply</h2>
                <p className="text-xl text-gray-700 font-medium">
                  Mitra Andal Anda dalam Keamanan dan Penyediaan Tenaga Kerja
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-blue-600 shadow-lg">
                <p className="text-gray-700 leading-relaxed text-lg">
                  PT Gardatama Purba Jaya merupakan perusahaan swasta yang bergerak di bidang Pengamanan Swakarsa
                  (Security Service) di bawah pembinaan Polda Metro Jaya. PT Gardatama Purba Jaya telah melayani
                  kebutuhan anda sejak tahun 1997. Perusahaan kami bergerak secara profesional dalam memberikan
                  pelayanan dan kebutuhan Perusahaan Anda dengan kualitas serta mutu terbaik.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 text-lg font-semibold border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>


            {/* Right Side - Hero Image */}
            <div className="relative animate-fade-in">
              <div className="relative">
                <img
                  src="/gardatamaui.jpg"
                  alt="Professional Security Services"
                  className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <div className="font-bold text-blue-900">Professional</div>
                      <div className="text-gray-600">Security Services</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Left - Text */}
              <div className="space-y-6 animate-fade-in-up">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">Tentang PT Gardatama Purba Jaya</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Kami adalah penyedia jasa keamanan berlisensi yang bekerja sama secara resmi dengan Polda Metro Jaya,
                  berkomitmen untuk memberikan perlindungan profesional dan solusi tenaga kerja yang komprehensif di
                  seluruh wilayah Jakarta.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dengan pengalaman lebih dari 25 tahun, kami telah dipercaya oleh berbagai perusahaan dan institusi
                  untuk menyediakan layanan keamanan dan tenaga kerja berkualitas tinggi.
                </p>
                <Link href="/about">
                  <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Pelajari Lebih Lanjut
                  </Button>
                </Link>
              </div>

              {/* Right - Image */}
              <div className="animate-fade-in">
                <img
                  src="/placeholder-5cc3c.png"
                  alt="Professional Security Team"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Visi Kami</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Menjadi penyedia tenaga ahli dan jasa yang terdepan sesuai dengan kebutuhan pengguna.
                </p>
              </Card>

              <Card className="p-8 text-center bg-gradient-to-br from-yellow-50 to-yellow-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Misi Kami</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Menyediakan layanan keamanan yang menyeluruh, Menjaga kualitas tenaga kerja yang memadai, Berlaku pada
                  keputusan penggunaan melalui perlindungan dan inovasi berkelanjutan.
                </p>
              </Card>

              <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Motto Kami</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Profesionalisme kami menjadi tombak penilaian publik terhadap perusahaan Anda.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Layanan Profesional Kami</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Solusi keamanan dan tenaga kerja yang komprehensif, disesuaikan dengan kebutuhan bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {/* Security Guard Services */}
            <Card className="p-6 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Security Guard Service</h3>
              <p className="text-gray-700 leading-relaxed">
                Personel keamanan profesional untuk fasilitas perumahan, komersial, dan industri dengan sistem
                pengamanan 24/7.
              </p>
            </Card>

            {/* Cleaning Services */}
            <Card className="p-6 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Cleaning Services</h3>
              <p className="text-gray-700 leading-relaxed">
                Layanan kebersihan profesional untuk perkantoran, pabrik, dan fasilitas lainnya dengan peralatan
                profesional.
              </p>
            </Card>

            {/* Telephone Operator */}
            <Card className="p-6 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Telephone Operator</h3>
              <p className="text-gray-700 leading-relaxed">
                Layanan operator telepon yang ramah dan profesional untuk mengelola komunikasi bisnis Anda secara
                efisien.
              </p>
            </Card>

            {/* Receptionist */}
            <Card className="p-6 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Resepsionis</h3>
              <p className="text-gray-700 leading-relaxed">
                Layanan resepsionis yang ramah dan profesional untuk menciptakan kesan pertama yang positif bagi
                pengunjung.
              </p>
            </Card>

            {/* Gardening & Landscaping */}
            <Card className="p-6 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Garden &amp; Landscaping</h3>
              <p className="text-gray-700 leading-relaxed">
                Layanan perawatan taman lengkap termasuk desain taman, pengelolaan tanaman, dan kebersihan area luar.
              </p>
            </Card>

            {/* Factory Manpower */}
            <Card className="p-6 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Factory Workers</h3>
              <p className="text-gray-700 leading-relaxed">
                Solusi tenaga kerja industri yang terampil untuk fasilitas manufaktur dengan personel terlatih dan
                kepatuhan keselamatan.
              </p>
            </Card>
          </div>

          <div className="text-center animate-fade-in-up">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Lihat Semua Layanan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="partners" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Mitra Kami</h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed opacity-90">
              Dipercaya oleh berbagai perusahaan terkemuka untuk menyediakan solusi keamanan dan tenaga kerja
              profesional.
            </p>
          </div>

          {/* Sliding Partners Logos */}
          <div className="relative">
            <div className="flex animate-slide-left space-x-12 items-center">
              {/* Partner logos with sliding animation */}
              <div className="flex-shrink-0 w-40 h-24 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-lg">Partner 1</div>
              </div>
              <div className="flex-shrink-0 w-40 h-24 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-lg">Partner 2</div>
              </div>
              <div className="flex-shrink-0 w-40 h-24 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-lg">Partner 3</div>
              </div>
              <div className="flex-shrink-0 w-40 h-24 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-lg">Partner 4</div>
              </div>
              <div className="flex-shrink-0 w-40 h-24 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-lg">Partner 5</div>
              </div>
              <div className="flex-shrink-0 w-40 h-24 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-lg">Partner 6</div>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex-shrink-0 w-40 h-24 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-lg">Partner 1</div>
              </div>
              <div className="flex-shrink-0 w-40 h-24 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-lg">Partner 2</div>
              </div>
              <div className="flex-shrink-0 w-40 h-24 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-lg">Partner 3</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Bergabung Sebagai Mitra
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
                <div className="w-12 h-12">
                  <img
                    src="/gardatama-logo.png"
                    alt="PT Gardatama Purba Jaya Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
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
