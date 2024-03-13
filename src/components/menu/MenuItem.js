export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img
          className="bg-transparent max-h-auto max-h-24 block mx-auto rounded-lg"
          src="/product_2.1.png"
          alt="pizza"
        />
      </div>
      <h4 className="font-semibold my-4 text-xl">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
        doloremque quibusdam hic.
      </p>
      <button className=" mt-4 bg-primary text-white rounded-full px-8 py-2">
        Comprar R$ 46,00
      </button>
    </div>
  );
}
