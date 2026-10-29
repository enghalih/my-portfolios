import { buttonVariants } from "@/components/Button";
import { Globe } from "lucide-react";
import { Github } from "@/components/Logos";
import Portfolio1 from "@/assets/portfolio-1.webp";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website – Modern Neo-Brutalist Web App",
    description:
      "Website portofolio pribadi yang dirancang dan dikembangkan dari nol dengan pendekatan desain Neo-brutalist yang bersih, interaktif, dan responsif. Dibangun untuk menampilkan profil profesional, daftar proyek, serta kemudahan akses kontak secara optimal di berbagai ukuran perangkat.",
    image: Portfolio1, // Ganti dengan path gambar proyekmu
    liveUrl: "https://enghalih.com",
    githubUrl: "https://github.com/enghalih/my-portfolios",
  },
];

export default function PortofoliosPage() {
  return (
    <div className="h-full flex flex-col gap-6">
      {/* Header */}
      {/* <div className="flex flex-col gap-2">
        <h1 className="text-preset-1 font-bold">Portofolio</h1>
        <p className="text-preset-4-medium text-neutral-600">
          Beberapa proyek pilihan yang telah saya kembangkan dengan standar
          kualitas terbaik.
        </p>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-neutral-0 border-custom rounded-2xl p-6 flex flex-col lg:flex-row justify-between gap-6"
          >
            <div className="flex flex-col gap-4">
              {/* Project Thumbnail */}
              <div className="w-full aspect-4/3 bg-neutral-200 border border-neutral-900 rounded-xl overflow-hidden flex items-center justify-center md:justify-stretch">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Button Link */}
              <div className="flex lg:flex-col flex-row gap-3 pt-2 items-center justify-center">
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
                  href={project.githubUrl}
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

            {/* Project Description */}
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
