import { Button } from "@/components/Button";
import { Link, BriefcaseBusinessIcon } from "lucide-react";
import ProfilePicture from "@/assets/profile.webp"

export default function HomePage() {
  return (
    <div className="grid md:grid-cols-3 gap-6 items-start">
      <div className="h-[calc(100vh-124px)] bg-neutral-0 border-custom rounded-2xl p-6 flex flex-col justify-between md:col-span-2">
        <div className="flex flex-col gap-4 sm:gap-6">
          <h1 className="text-preset-1-tb sm:text-preset-1">
            Hai, Saya Wenning Ghalih
          </h1>
          <h2 className="text-preset-2">Full Stack Developer</h2>
          <p className="text-preset-4-medium">
            Bukan cuma soal menulis baris kode, tapi tentang membangun sistem
            yang fungsional, cepat, dan nyaman digunakan.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">
            <Link size={16} /> Unduh CV
          </Button>
          <Button variant="secondary">
            <BriefcaseBusinessIcon size={16} />
            <p className="hidden sm:block">Lihat Portofolio</p>
          </Button>
        </div>
      </div>
      <div className="w-full h-[calc(100vh-124px)] bg-pink-400 border-custom rounded-2xl overflow-hidden items-center justify-center hidden md:flex md:col-span-1">
        <img
          src={ProfilePicture}
          alt="Wenning Ghalih"
          className="h-full w-full object-[50%_25%] object-cover md:object-center"
        />
      </div>
    </div>
  );
}
