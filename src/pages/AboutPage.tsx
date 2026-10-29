import ProfilePicture from "@/assets/profile.webp";

export default function AboutPage() {
  const skills = {
    frontend: [
      "React",
      "Next.js",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "SCSS",
      "HTML5",
      "CSS",
      "JavaScript",
    ],
    backend: ["Laravel", "Supabase"],
    deployment: ["Github Pages", "Vercel", "Netlify"],
    qa: ["Vitest", "Jest", "Playwright"],
    tools: ["Git & GitHub", "Figma"],
  };

  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Picture */}
      <div className="w-full h-72 bg-pink-400 border-custom rounded-2xl overflow-hidden flex items-center justify-center md:row-span-2 md:h-full">
        <img
          src={ProfilePicture}
          alt="Wenning Ghalih"
          className="w-full h-full object-[50%_25%] object-cover md: md:object-center"
        />
      </div>

      {/* Bio */}
      <div className="bg-neutral-0 border-custom rounded-2xl p-6 flex flex-col gap-4 md:col-span-2">
        <h2 className="text-preset-2">Tentang Saya</h2>
        <p className="text-preset-4-regular">
          Dulu saya pikir koding itu yang penting kodenya jalan dan
          fitur-fiturnya lancar. Tapi seiring mendalami dunia development secara
          mandiri, saya sadar ada banyak hal lain yang tidak kalah penting:
          mulai dari menulis struktur kode yang rapi, memastikan website cepat
          dan bisa diakses oleh siapa saja, sampai merancang sistem yang
          benar-benar pas dengan kebutuhan pengguna.
        </p>
        <p className="text-preset-4-regular">
          Buat saya, proses eksplorasi teknologi baru dan ngerjain berbagai
          proyek kreatif adalah cara terbaik buat terus belajar. Saya menikmati
          setiap prosesnya dari membuat tampilan frontend hingga menyiapkan
          logika di balik layar supaya aplikasi yang dibangun tidak cuma
          berfungsi, tapi juga nyaman dipakai.
        </p>
      </div>

      {/* Tech Stack & Tools */}
      <div className="bg-neutral-0 border-custom rounded-2xl flex flex-col md:col-span-2">
        {/* Frontend */}
        <div className="flex flex-col gap-3 p-6">
          <h3 className="text-preset-3 font-semibold">Frontend</h3>
          <div className="flex flex-wrap gap-3">
            {skills.frontend.map((skill) => (
              <span className="px-3 py-1.5 bg-neutral-100 border-custom rounded-lg text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <hr className="border-neutral-600" />

        {/* Backend */}
        <div className="flex flex-col gap-3 p-6">
          <h3 className="text-preset-3 font-semibold">Backend</h3>
          <div className="flex flex-wrap gap-3">
            {skills.backend.map((skill) => (
              <span className="px-3 py-1.5 bg-neutral-100 border-custom rounded-lg text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <hr className="border-neutral-600" />

        {/* Deployment */}
        <div className="flex flex-col gap-3 p-6">
          <h3 className="text-preset-3 font-semibold">Deployment</h3>
          <div className="flex flex-wrap gap-3">
            {skills.deployment.map((skill) => (
              <span className="px-3 py-1.5 bg-neutral-100 border-custom rounded-lg text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <hr className="border-neutral-600" />

        {/* QA */}
        <div className="flex flex-col gap-3 p-6">
          <h3 className="text-preset-3 font-semibold">
            Testing & Quality Assurance (QA)
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.qa.map((skill) => (
              <span className="px-3 py-1.5 bg-neutral-100 border-custom rounded-lg text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <hr className="border-neutral-600" />

        {/* Tools & Infrastructure */}
        <div className="flex flex-col gap-3 p-6">
          <h3 className="text-preset-3 font-semibold">
            Design & Version Control Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((skill) => (
              <span className="px-3 py-1.5 bg-neutral-100 border-custom rounded-lg text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
