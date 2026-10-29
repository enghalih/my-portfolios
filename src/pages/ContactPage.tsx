import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/Button";
import { Github } from "@/components/Logos";
import { useState } from "react";

export default function ContactPage() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("Sedang mengirim...");

    const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", apiKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Pesan berhasil terkirim!");
        form.reset();
      } else {
        setResult(data.message || "Gagal mengirim pesan.");
      }
    } catch (error) {
      console.error(error);
      setResult("Terjadi kesalahan koneksi. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
       // Auto-hide notification after 3 seconds
      setTimeout(() => {
        setResult("");
      }, 3000);
    }
  };

  return (
    <div className="h-full gap-6 grid md:grid-cols-3">
      {result && (
        <div
          className={`p-3 rounded-lg text-sm font-medium border-custom fixed left-1/2 -translate-x-1/2 top-4 z-10 ${
            result.includes("berhasil") ? "bg-teal-400" : ""
          }`}
        >
          {result}
        </div>
      )}
      {/* social media link */}
      <div className="flex flex-col gap-4 md:row-span-2">
        {/* GitHub */}
        <a
          href="https://github.com/enghalih"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neutral-0 border-button rounded-2xl p-4 flex items-center gap-3 hover:bg-neutral-50 transition-colors"
        >
          <Github size={20} className="text-neutral-900" />
          <span className="text-preset-4-medium font-semibold">@enghalih</span>
        </a>

        {/* Email */}
        <a
          href="mailto:enghalih685@gmail.com"
          className="bg-neutral-0 border-button rounded-2xl p-4 flex items-center gap-3 hover:bg-neutral-50 transition-colors"
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
          className="bg-neutral-0 border-button rounded-2xl p-4 flex items-center gap-3 hover:bg-neutral-50 transition-colors"
        >
          <Phone size={20} className="text-neutral-900" />
          <span className="text-preset-4-medium font-semibold">
            +62 822-9505-1851
          </span>
        </a>
      </div>

      {/* 2. Contact form */}
      <div className="bg-neutral-0 border-custom rounded-2xl p-6 flex flex-col gap-6 md:col-span-2">
        <h2 className="text-preset-2 font-bold">Kontak</h2>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          {/* Input Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-neutral-900">
              Name
            </label>
            <input
              name="name"
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
              name="email"
              type="email"
              className="w-full bg-neutral-0 border-input rounded-md px-4 py-3 text-sm focus:outline-none"
            />
          </div>

          {/* Input Content */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-neutral-900">
              Content
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full bg-neutral-0 border-input rounded-md p-4 text-sm focus:outline-none resize-none"
            />
          </div>

          {/* Semd Button */}
          <div className="flex justify-end mt-2">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Mengirim..." : "Kirim"}
            </Button>
          </div>
        </form>
      </div>

      {/* Address */}
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
