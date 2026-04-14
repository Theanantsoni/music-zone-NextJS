"use client";

import { Music, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      
      {/* Hero Section */}
      <section className="text-center py-16 pt-50 px-4">
        <div className="flex justify-center mb-4">
          <Music className="h-12 w-12 text-purple-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact <span className="text-purple-500">Music Zone</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Got a question, feedback, or collaboration idea?  
          Drop us a message — we’d love to hear your vibe 🎧
        </p>
      </section>

      {/* Main Section */}
      <section className="max-w-6xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <div className="bg-zinc-900 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-1 text-gray-400">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-400">
                Subject
              </label>
              <input
                type="text"
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-400">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 focus:outline-none focus:border-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          
          <div className="flex items-center gap-4 bg-zinc-900 p-6 rounded-xl">
            <Mail className="h-6 w-6 text-purple-500" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium">support@musiczone.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-zinc-900 p-6 rounded-xl">
            <Phone className="h-6 w-6 text-purple-500" />
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="font-medium">+91 81405 91020</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-zinc-900 p-6 rounded-xl">
            <MapPin className="h-6 w-6 text-purple-500" />
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="font-medium">Surat, Gujarat, India</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
