import {Mail, Phone, MapPin } from "lucide-react";
import {Button} from "@/components/Button";
import { Github } from "@/components/Logos";

export default function ContactPage() {
  return (
    <div className="h-full gap-6 grid md:grid-cols-3">
      {/* 1. Bagian Info Kontak Cepat (GitHub, Email, WhatsApp) */}
      <div className="flex flex-col gap-4 md:row-span-2">
        {/* GitHub */}
        <a
          href="https://github.com/enghalih"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neutral-0 border-custom rounded-2xl p-4 flex items-center gap-3 hover:bg-neutral-50 transition-colors"
        >
          <Github size={20} className="text-neutral-900" />
          <span className="text-preset-4-medium font-semibold">@enghalih</span>
        </a>

        {/* Email */}
        <a
          href="mailto:enghalih685@gmail.com"
          className="bg-neutral-0 border-custom rounded-2xl p-4 flex items-center gap-3 hover:bg-neutral-50 transition-colors"
        >
          <Mail size={20} className="text-neutral-900" />
          <span className="text-preset-4-medium font-semibold">
            enghalih685@gmail.com
          </span>
        </a>

        {/* WhatsApp / Phone */}
        <a
          href="https://wa.me/6282295051851"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neutral-0 border-custom rounded-2xl p-4 flex items-center gap-3 hover:bg-neutral-50 transition-colors"
        >
          <Phone size={20} className="text-emerald-600" />
          <span className="text-preset-4-medium font-semibold">
            +62 822-9505-1851
          </span>
        </a>
      </div>

      {/* 2. Bagian Formulir Kontak */}
      <div className="bg-neutral-0 border-custom rounded-2xl p-6 flex flex-col gap-6 md:col-span-2">
        <h2 className="text-preset-2 font-bold">Kontak</h2>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          {/* Input Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-neutral-900">
              Name
            </label>
            <input
              type="text"
              className="w-full bg-neutral-0 border-input rounded-md px-4 py-3 text-sm focus:outline-none"
            />
          </div>

          {/* Input Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-neutral-900">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-neutral-0 border-input rounded-md px-4 py-3 text-sm focus:outline-none"
            />
          </div>

          {/* Input Content / Pesan */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-neutral-900">
              Content
            </label>
            <textarea
              rows={4}
              className="w-full bg-neutral-0 border-input rounded-md p-4 text-sm focus:outline-none resize-none"
            />
          </div>

          {/* Tombol Kirim */}
          <div className="flex justify-end mt-2">
            <Button>Kirim</Button>
          </div>
        </form>
      </div>

      {/* 3. Bagian Alamat */}
      <div className="bg-neutral-0 border-custom rounded-2xl p-6 flex flex-col gap-3 md:col-span-2">
        <div className="flex items-center gap-2">
          <MapPin size={20} className="text-pink-700" />
          <h3 className="text-preset-3 font-bold">Alamat</h3>
        </div>
        <p className="text-preset-4-regular text-neutral-900 leading-relaxed">
          Karangtanjung, Kec. Cililin, Kabupaten Bandung Barat, Jawa Barat 40562
        </p>
      </div>
    </div>
  );
}
