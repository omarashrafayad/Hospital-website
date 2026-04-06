import DoctorCard from "@/components/DoctorCard";

export default function DoctorsSection() {
  return (
    <section className="py-32 px-6 lg:px-20 bg-muted/20">
      <div className="max-w-7xl mx-auto text-center mb-24">
        <h2 className="text-5xl lg:text-6xl font-serif text-primary mb-8 tracking-tight font-medium">Elite Medical Professionals</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed italic underline decoration-accent decoration-1 underline-offset-8">
          Our clinicians are leaders in their fields, committed to the art and science of curated healing.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <DoctorCard
          id="elena-rossi"
          name="Dr. Elena Rossi"
          specialty="Chief of Cardiology"
          description="Specializing in preventative heart health and advanced surgical interventions with over 15 years of experience."
          imageUrl="/images/doctor_elena_rossi_1775375011208.png"
        />
        <DoctorCard
          id="marcus-thorne"
          name="Dr. Marcus Thorne"
          specialty="Lead Neurologist"
          description="Pioneer in genomic cancer therapies and integrated patient-centered care, bringing Ivy League expertise."
          imageUrl="/images/doctor_marcus_thorne_1775375068500.png"
        />
        <DoctorCard
          id="sarah-jenkins"
          name="Dr. Sarah Jenkins"
          specialty="Director of Oncology"
          description="Focusing on holistic oncology and personalized treatment pathways for long-term clinical excellence."
          imageUrl="/images/doctor_sarah_jenkins_1775375083797.png"
        />
      </div>
    </section>
  );
}
