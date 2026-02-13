import Image from 'next/image';

function ExperienceImageSection() {
  return (
    <div className="relative h-120 w-full overflow-hidden rounded-3xl lg:h-160 lg:rounded-none">
      <span className="bg-background-light-gray absolute top-0 -left-2/12 hidden aspect-3/2 w-10/12 rounded-2xl lg:block" />
      <span className="bg-background-light-gray absolute top-32 right-1/12 hidden aspect-video w-10/12 rounded-2xl lg:block" />

      <div className="absolute start-0 flex w-full items-center justify-center overflow-hidden lg:top-16 lg:w-10/12">
        <Image
          src="/experience.webp"
          alt="Modern luxury interior with elegant furniture"
          width={800}
          height={600}
          className="h-120 rounded-l-3xl rounded-r-3xl object-cover lg:rounded-l-none"
        />
      </div>
    </div>
  );
}

export default ExperienceImageSection;
