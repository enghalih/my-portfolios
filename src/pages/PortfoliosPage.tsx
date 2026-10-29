import { buttonVariants } from "@/components/Button";
import { Globe, FileText } from "lucide-react";
import { Github } from "@/components/Logos";

// Data contoh daftar portofolio (bisa kamu sesuaikan dengan proyek aslimu nanti)
const projects = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed morbi ac odio viverra dignissim auctor. Nibh sapien convallis amet malesuada enim faucibus nulla. Non odio te quis.",
    image: "/placeholder-project-1.jpg", // Ganti dengan path gambar proyekmu
    liveUrl: "https://enghalih.com",
    githubUrl: "https://github.com/enghalih",
    docsUrl: "#",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed morbi ac odio viverra dignissim auctor. Nibh sapien convallis amet malesuada enim faucibus nulla. Non odio te quis.",
    image: "/placeholder-project-2.jpg",
    liveUrl: "https://enghalih.com",
    githubUrl: "https://github.com/enghalih",
    docsUrl: "#",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed morbi ac odio viverra dignissim auctor. Nibh sapien convallis amet malesuada enim faucibus nulla. Non odio te quis.",
    image: "/placeholder-project-3.jpg",
    liveUrl: "https://enghalih.com",
    githubUrl: "https://github.com/enghalih",
    docsUrl: "#",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed morbi ac odio viverra dignissim auctor. Nibh sapien convallis amet malesuada enim faucibus nulla. Non odio te quis.",
    image: "/placeholder-project-4.jpg",
    liveUrl: "https://enghalih.com",
    githubUrl: "https://github.com/enghalih",
    docsUrl: "#",
  },
];

export default function PortofoliosPage() {
  return (
    <div className="h-full flex flex-col gap-6">
      {/* Header Halaman */}
      {/* <div className="flex flex-col gap-2">
        <h1 className="text-preset-1 font-bold">Portofolio</h1>
        <p className="text-preset-4-medium text-neutral-600">
          Beberapa proyek pilihan yang telah saya kembangkan dengan standar
          kualitas terbaik.
        </p>
      </div> */}

      {/* Grid Proyek (Responsif: 1 kolom di mobile, 2 kolom di layar medium/desktop ke atas) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-neutral-0 border-custom rounded-2xl p-6 flex flex-col lg:flex-row justify-between gap-6"
          >
            {/* Gambar / Thumbnail Proyek */}
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-video bg-neutral-200 border border-neutral-900 rounded-xl overflow-hidden flex items-center justify-center md:justify-stretch">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Bagian Tombol Aksi Menggunakan Komponen Button */}
              <div className="flex lg:flex-col flex-row gap-3 pt-2 items-center justify-center">
                {/* Tombol Kunjungi Situs (Primary) */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className={buttonVariants({
                    variant: "primary",
                    className: "lg:w-full",
                  })}
                  rel="noopener noreferrer"
                >
                  <Globe size={18} />{" "}
                  <p className="hidden lg:block text-nowrap">Situs Langsung</p>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className={buttonVariants({
                    variant: "secondary",
                    className: "lg:w-full",
                  })}
                  rel="noopener noreferrer"
                >
                  <Github size={16} />{" "}
                  <p className="hidden lg:block text-nowrap">Kode Github</p>
                </a>
              </div>
            </div>

            {/* Teks Informasi Proyek */}
            <div className="flex flex-col gap-3">
              <h3 className="text-preset-3 font-bold leading-tight">
                {project.title}
              </h3>
              <p className="text-preset-4-medium text-neutral-600 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
