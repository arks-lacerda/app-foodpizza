import Image from 'next/image';
import pizza01 from '../../../public/pizza.png';
import Right from '../icons/Right';

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold leading-[1.3]">
          Tudo <br /> fica melhor <br /> com uma&nbsp;
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza é o pedaço que faltava para completa os seus dias, uma alegria
          de vida em uma simple e deliciosa mordida
        </p>

        <div className="flex gap-4 items-center text-sm">
          <button className="bg-primary uppercase text-white px-4 py-2 rounded-full flex items-center gap-2">
            Peça agora
            <Right />
          </button>
          <button className="flex gap-2 text-gray-600 font-semibold">
            Sabe Mais
            <Right />
          </button>
        </div>
      </div>

      <div className="relative">
        <Image
          src={pizza01}
          layout={'fill'}
          objectFit={'contain'}
          alt={'pizza'}
        />
      </div>
    </section>
  );
}
