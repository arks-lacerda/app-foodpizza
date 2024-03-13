import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import HomeMenu from '@/components/layout/HomeMenu';
import SectionHeaders from '@/components/layout/SectionHeaders';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={'Nossa Historia'} mainHeader={'Sobre nós'} />

        <div className="max-w-2xl mx-auto mt-4 text-gray-500 flex flex-col gap-4">
          <p>
            Bem-vindo à Prosper Pizza, o seu destino irresistível para uma
            experiência gastronômica única e deliciosa. Fundada com paixão e
            dedicação, nossa pizzaria tem o compromisso de proporcionar momentos
            memoráveis a todos os amantes de pizza. No coração de nossa missão
            está a busca incessante pela excelência, desde a cuidadosa seleção
            dos ingredientes frescos até a arte artesanal que culmina em cada
            fatia de nossa pizza.
          </p>
          <p>
            Na Prosper Pizza, a tradição e a inovação se entrelaçam para criar
            um cardápio diversificado que agrada a todos os paladares. Nossos
            chefs especializados combinam técnicas clássicas com um toque
            contemporâneo, resultando em sabores autênticos e inigualáveis. Além
            disso, estamos comprometidos com a comunidade, usando ingredientes
            locais sempre que possível e apoiando fornecedores locais.
          </p>
          <p>
            Aqui na Prosper Pizza, não é apenas sobre a comida; é sobre a
            experiência compartilhada em torno da mesa. Nosso ambiente acolhedor
            e serviço caloroso fazem com que todos se sintam em casa. Seja para
            uma reunião casual entre amigos, uma celebração especial ou uma
            simples noite de pizza em família, a Prosper Pizza é o lugar onde os
            bons momentos prosperam. Junte-se a nós e deixe sua jornada
            gastronômica começar!
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={'Não exite em'}
          mainHeader={'Contatar nós'}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+31999999999"
          >
            +31 99999 9999
          </a>
        </div>
      </section>

      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2024 All rights reserved
      </footer>
    </>
  );
}
