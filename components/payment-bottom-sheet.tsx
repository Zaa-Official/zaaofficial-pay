"use client"

import type React from "react"

import { useState } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, Wallet, Smartphone, QrCode, CreditCard, ArrowLeft, Sparkles } from "lucide-react"
import Image from "next/image"

interface PaymentBottomSheetProps {
  isOpen: boolean
  onClose: () => void
}

interface PaymentMethod {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  number?: string
  type: "ewallet" | "qris"
}

const paymentMethods: PaymentMethod[] = [
  {
    id: "dana",
    name: "DANA",
    icon: <Wallet className="w-6 h-6 text-purple-600" />,
    color: "text-purple-600",
    number: "6285946999307",
    type: "ewallet",
  },
  {
    id: "gopay",
    name: "GoPay",
    icon: <Smartphone className="w-6 h-6 text-purple-600" />,
    color: "text-purple-600",
    number: "6285946999307",
    type: "ewallet",
  },
  {
    id: "ovo",
    name: "OVO",
    icon: <CreditCard className="w-6 h-6 text-purple-600" />,
    color: "text-purple-600",
    number: "6285946999307",
    type: "ewallet",
  },
  {
    id: "qris",
    name: "QRIS",
    icon: <QrCode className="w-6 h-6 text-purple-600" />,
    color: "text-purple-600",
    type: "qris",
  },
]

export function PaymentBottomSheet({ isOpen, onClose }: PaymentBottomSheetProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null)
  const [copied, setCopied] = useState(false)

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleMethodSelect = (method: PaymentMethod) => {
    setSelectedMethod(method)
  }

  const handleBack = () => {
    setSelectedMethod(null)
  }

  const handleClose = () => {
    setSelectedMethod(null)
    onClose()
  }

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl border-0 bg-white shadow-2xl">
        <SheetHeader className="pb-8 pt-4">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6"></div>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/lizanami-logo.png"
                alt="Lizanami Pay Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Zaa Official⚡ Pay
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <SheetTitle className="text-3xl font-bold text-gray-900 text-left">
                {selectedMethod ? `Pembayaran ${selectedMethod.name}` : "Pilih Metode Pembayaran"}
              </SheetTitle>
              <SheetDescription className="text-left mt-2 text-lg text-gray-600">
                {selectedMethod
                  ? "Gunakan informasi di bawah untuk menyelesaikan pembayaran"
                  : "Pilih metode pembayaran yang Anda inginkan"}
              </SheetDescription>
            </div>
            {selectedMethod && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-2xl px-4 py-2"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali
              </Button>
            )}
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto pb-6">
          {!selectedMethod ? (
            <div className="space-y-6">
              <div className="bg-white rounded-3xl border border-purple-100 overflow-hidden shadow-lg">
                <div className="px-8 py-6 border-b border-purple-100">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                    <h3 className="font-bold text-xl text-gray-900">Metode Pembayaran Tersedia</h3>
                  </div>
                  <p className="text-gray-600 mt-2">Pilih metode pembayaran yang paling nyaman untuk Anda</p>
                </div>

                <div className="p-2">
                  {paymentMethods.map((method, index) => (
                    <div
                      key={method.id}
                      className="flex items-center justify-between p-6 hover:bg-purple-50 cursor-pointer transition-all duration-300 group rounded-2xl mx-2 my-1"
                      onClick={() => handleMethodSelect(method)}
                    >
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center justify-center w-14 h-14 rounded-2xl group-hover:bg-purple-50 transition-all duration-300 border border-purple-100">
                          {method.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-xl text-gray-900">{method.name}</h4>
                          <p className="text-gray-600 text-lg">
                            {method.type === "ewallet" ? "E-Wallet Digital" : "QR Code Payment"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 border-0 px-4 py-2 text-sm font-semibold rounded-xl">
                          {method.type === "ewallet" ? "Instant" : "Scan"}
                        </Badge>
                        <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-purple-100 shadow-lg">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg border border-purple-100">
                    {selectedMethod.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-3xl text-gray-900">{selectedMethod.name}</h3>
                    <p className="text-gray-600 text-xl">
                      {selectedMethod.type === "ewallet"
                        ? "Transfer ke nomor berikut"
                        : "Scan QR Code untuk pembayaran"}
                    </p>
                  </div>
                </div>

                {selectedMethod.type === "ewallet" && selectedMethod.number ? (
                  <div className="space-y-8">
                    <div className="bg-white rounded-2xl p-8 border border-purple-100 shadow-md">
                      <label className="text-lg font-semibold text-gray-700 block mb-4">
                        Nomor {selectedMethod.name}
                      </label>
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl font-mono text-2xl font-bold text-gray-900 border border-purple-200 text-center">
                          {selectedMethod.number}
                        </div>
                        <Button
                          onClick={() => handleCopy(selectedMethod.number!)}
                          className="px-6 py-6 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          {copied ? <Check className="w-6 h-6 text-white" /> : <Copy className="w-6 h-6" />}
                        </Button>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-purple-100 shadow-md">
                      <h4 className="font-bold text-xl text-gray-900 mb-6 flex items-center">
                        <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                        Langkah Pembayaran
                      </h4>
                      <div className="space-y-4">
                        {[
                          `Buka aplikasi ${selectedMethod.name}`,
                          "Pilih menu Transfer atau Kirim Uang",
                          "Masukkan nomor di atas",
                          "Masukkan jumlah yang akan dibayar",
                          "Konfirmasi pembayaran",
                        ].map((step, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 shadow-md">
                              {index + 1}
                            </div>
                            <p className="text-gray-700 text-lg pt-1">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="text-center">
                      <div className="bg-white p-8 rounded-3xl inline-block shadow-2xl border border-purple-100">
                        <Image
                          src="/qris-code.png"
                          alt="QRIS Code"
                          width={300}
                          height={420}
                          className="rounded-2xl"
                        />
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-purple-100 shadow-md">
                      <h4 className="font-bold text-xl text-gray-900 mb-6 flex items-center">
                        <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                        Cara Scan QRIS
                      </h4>
                      <div className="space-y-4">
                        {[
                          "Buka aplikasi e-wallet atau mobile banking",
                          "Pilih menu Scan QR atau QRIS",
                          "Arahkan kamera ke QR Code di atas",
                          "Masukkan jumlah pembayaran",
                          "Konfirmasi transaksi",
                        ].map((step, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 shadow-md">
                              {index + 1}
                            </div>
                            <p className="text-gray-700 text-lg pt-1">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="flex-1 bg-white border-2 border-purple-200 text-purple-700 hover:bg-purple-50 rounded-2xl py-4 text-lg font-semibold"
                >
                  Pilih Metode Lain
                </Button>
                <Button
                  onClick={handleClose}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-2xl py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Selesai
                </Button>
              </div>
            </div>
          )}
        </div>

        {!selectedMethod && (
          <div className="border-t border-purple-100 pt-6 mt-6">
            <div className="text-center">
              <p className="text-gray-500 text-sm">© 2024 Zaa Official ⚡ Pay - Pembayaran Digital Terpercaya</p>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
