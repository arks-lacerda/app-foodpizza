import Image from 'next/image';
export default function HomeMenu() {
  return (
    <section className="">
      <div
        className="absolute h-64 left-0 right-0 w-full justify-start"
        style={{}}
      >
        <div className="absolute -left-12 -top-[85px] text-left -z-10">
          <Image src={'/sallad1.png'} alt={'salada'} width={107} height={195} />
        </div>

        <div className=" -top-24 absolute right-0 -z-10">
          <Image src={'/sallad2.png'} alt={'salada'} width={107} height={195} />
        </div>
      </div>
      <div className="text-center">
        <h3 className="uppercase text-gray-500 font-semibold leading-3">
          Confira
        </h3>
        <h2 className="text-primary font-bold text-4xl">Cardápio</h2>
      </div>
    </section>
  );
}
