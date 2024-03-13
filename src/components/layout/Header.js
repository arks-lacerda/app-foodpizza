import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between">
        <Link
          className="text-red-500 font-semibold text-2xl flex items-center gap-2"
          href="/"
        >
          <Image src={logo} alt={'logo'} className="w-10" />
          Prosper Pizzas
        </Link>
        <nav className="flex gap-8 text-gray-500 font-semibold items-center p-3">
          <Link href={''}>Home</Link>
          <Link href={''}>Cardápio</Link>
          <Link href={''}>Sobre nós</Link>
          <Link href={''}>Contatos</Link>
          <Link
            href={''}
            className="bg-primary text-white px-8 py-2 rounded-full"
          >
            Login
          </Link>
        </nav>
      </header>
    </>
  );
}
