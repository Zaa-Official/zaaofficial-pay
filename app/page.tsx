"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PaymentBottomSheet } from "@/components/payment-bottom-sheet"
import { TypingAnimation } from "@/components/typing-animation"
import {
  CreditCard,
  Shield,
  Zap,
  Users,
  ArrowDown,
  Smartphone,
  Lock,
  CheckCircle,
  Play,
  Clock,
  Sparkles,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"
import React from "react"

export default function HomePage() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features = [
    {
      icon: <CreditCard className="w-8 h-8 text-white" />,
      title: "Multi Payment Gateway",
      description:
        "Mendukung berbagai metode pembayaran digital populer di Indonesia seperti Dana, GoPay, OVO, dan QRIS",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Keamanan Terjamin",
      description: "Sistem keamanan berlapis dengan enkripsi end-to-end untuk melindungi setiap transaksi Anda",
      gradient: "from-purple-600 to-purple-700",
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Proses Instan",
      description: "Transaksi diproses dalam hitungan detik dengan konfirmasi real-time untuk kemudahan Anda",
      gradient: "from-purple-400 to-purple-500",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Dukungan 24/7",
      description: "Tim customer service siap membantu Anda kapan saja dengan respon cepat dan solusi terpercaya",
      gradient: "from-purple-700 to-purple-800",
    },
  ]

  const benefits = [
    {
      icon: <Smartphone className="w-6 h-6 text-purple-600" />,
      title: "Interface Modern",
      description: "Desain yang intuitif dan mudah digunakan",
    },
    {
      icon: <Lock className="w-6 h-6 text-purple-600" />,
      title: "Data Aman",
      description: "Perlindungan data dengan standar internasional",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
      title: "Transaksi Mudah",
      description: "Proses pembayaran yang simpel dan cepat",
    },
  ]

  const tutorialCards = [
    {
      icon: <Play className="w-6 h-6 text-purple-600" />,
      title: "Mulai Pembayaran",
      description: "Klik tombol 'Bayar Sekarang' untuk memulai proses pembayaran",
      number: "01",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-purple-600" />,
      title: "Pilih Metode",
      description: "Pilih antara Dana, GoPay, OVO, atau QRIS sesuai kebutuhan",
      number: "02",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
      title: "Selesaikan Transaksi",
      description: "Ikuti instruksi dan selesaikan pembayaran dengan aman",
      number: "03",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/lizanami-logo.png"
                alt="Lizanami Pay Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Zaa Official⚡ Pay
            </span>
          </div>
          <Button
            onClick={() => setIsPaymentOpen(true)}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Bayar Sekarang
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden py-24 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div
            className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in-up" style={{ transform: `translateY(${scrollY * -0.2}px)` }}>
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-medium mb-8">
              <TrendingUp className="w-4 h-4 mr-2" />
              Website List Payment Zaa Official⚡
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Solusi Pembayaran
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent block">
                Digital Terpercaya
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Platform pembayaran digital yang mendukung Dana, GoPay, OVO, dan QRIS. Nikmati kemudahan bertransaksi
              dengan keamanan terjamin dan interface yang modern.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                onClick={() => setIsPaymentOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-10 py-4 text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Mulai Pembayaran
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 px-10 py-4 text-xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>

          <div className="mt-16 animate-float" style={{ transform: `translateY(${scrollY * -0.1}px)` }}>
            <ArrowDown className="w-8 h-8 text-purple-600 mx-auto animate-bounce" />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-purple-50 to-white overflow-hidden">
            <CardHeader className="text-center pb-12 pt-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Cara Menggunakan Zaa Official⚡ Pay
              </CardTitle>
              <CardDescription className="text-xl max-w-3xl mx-auto text-gray-600">
                Ikuti langkah-langkah sederhana untuk melakukan pembayaran digital dengan mudah dan aman
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-12 pb-12">
              <div className="text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto shadow-lg border border-purple-100">
                  <TypingAnimation />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {tutorialCards.map((step, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white shadow-lg overflow-hidden"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      transform: `translateY(${Math.max(0, (scrollY - 400) * -0.1)}px)`,
                    }}
                  >
                    <CardHeader className="text-center pb-6 pt-8 relative">
                      <div className="absolute top-4 right-4 text-6xl font-bold text-purple-100 group-hover:text-purple-200 transition-colors">
                        {step.number}
                      </div>
                      <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl w-fit group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                        {step.icon}
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-8">
                      <CardDescription className="text-center leading-relaxed text-gray-600 text-lg">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto">
          <Card className="border-0 shadow-xl bg-white mb-16">
            <CardHeader className="text-center pb-8 pt-12">
              <CardTitle className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mengapa Memilih Zaa Official⚡Pay?
              </CardTitle>
              <CardDescription className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kami menyediakan solusi pembayaran digital yang komprehensif dengan teknologi terdepan dan keamanan
                terjamin
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 overflow-hidden bg-white shadow-lg"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transform: `translateY(${Math.max(0, (scrollY - 800) * -0.05)}px)`,
                }}
              >
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="mx-auto mb-6 p-4 bg-purple-100 rounded-2xl w-fit group-hover:bg-purple-200 transition-all duration-300">
                    <div className="w-8 h-8 text-purple-600">
                      {React.cloneElement(feature.icon, { className: "w-8 h-8 text-purple-600" })}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <CardDescription className="text-center text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-3xl p-8 border border-purple-200 shadow-lg">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Keunggulan Platform Kami</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Zaa Official⚡ Pay hadir dengan berbagai keunggulan yang memudahkan aktivitas pembayaran digital Anda
                sehari-hari dengan teknologi terdepan.
              </p>
            </div>

            <div>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="p-6 group hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-200 bg-white"
                  >
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-6">
                        <div className="p-3 rounded-xl group-hover:bg-purple-50 transition-all duration-300">
                          {benefit.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                          <p className="text-gray-600 text-lg">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-purple-900 to-purple-800 py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/lizanami-logo.png"
                alt="Zaa Official Pay Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-3xl font-bold text-white">Zaa Official Pay</span>
          </div>
          <p className="text-purple-200 mb-6 text-lg">
            Solusi pembayaran digital terpercaya untuk kemudahan hidup Anda
          </p>
          <p className="text-purple-300">© 2025 Zaa Official⚡ Pay. Semua hak dilindungi Koruptor.</p>
        </div>
      </footer>

      <PaymentBottomSheet isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} />
    </div>
  )
}
