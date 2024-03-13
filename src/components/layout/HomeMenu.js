import Image from 'next/image';
import MenuItem from '../menu/MenuItem';
import SectionHeaders from './SectionHeaders';
export default function HomeMenu() {
  return (
    <section className="">
      <div className="absolute h-64 left-0 right-0  justify-start" style={{}}>
        <div className="absolute -left-12 -top-[85px] text-left -z-10">
          <Image src={'/sallad1.png'} alt={'salada'} width={107} height={195} />
        </div>

        <div className=" -top-24 absolute right-0 -z-10">
          <Image src={'/sallad2.png'} alt={'salada'} width={107} height={195} />
        </div>
      </div>

      <div className="text-center mb-4">
        <SectionHeaders subHeader={'Confira'} mainHeader={'Menu'} />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
