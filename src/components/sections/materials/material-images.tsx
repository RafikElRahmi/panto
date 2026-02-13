import Image from 'next/image';

function MaterialImages() {
  return (
    <div className="grid grid-cols-[1fr_2fr] gap-4 md:gap-8 lg:gap-12">
      <div className="flex flex-col justify-end gap-4 pb-7 md:gap-8 lg:gap-12">
        <Image
          src="/material-cyan-chair.jpg"
          alt="Cyan upholstered accent chair showcasing premium fabric material"
          width={800}
          height={600}
          className="shadow-primary-cyan/20 aspect-square rounded-3xl object-fill shadow-xl"
        />
        <Image
          src="/material-gray-chair.jpg"
          alt="Gray minimalist chair highlighting durable material construction"
          width={800}
          height={600}
          className="shadow-primary-gray/30 aspect-3/4 rounded-3xl object-fill shadow-xl"
        />
      </div>
      <div className="relative flex w-full items-end overflow-hidden pb-7">
        <span className="bg-background-light-gray absolute -right-4/12 bottom-6/12 hidden aspect-video w-full rounded-3xl lg:block" aria-hidden="true" />
        <Image
          src="/material-orange-chair.jpg"
          alt="Orange designer chair demonstrating high-quality craftsmanship"
          width={600}
          height={600}
          className="shadow-primary-orange/30 absolute z-10 mr-[-20%] aspect-square w-[125%] rounded-l-3xl rounded-r-none object-fill shadow-xl lg:w-full"
        />
      </div>
    </div>
  );
}

export default MaterialImages;
