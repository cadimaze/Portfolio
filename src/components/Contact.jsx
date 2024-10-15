import Reveal from "./Reveal"

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
        <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
            <div>
                <div className="text-gray-300 my-3">
                    <h3 className="text-4xl font-semibold mb-5">Sobre <span>Mim</span></h3>
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                    Guilherme Cadima, 24 anos, moro em São Paulo, Capital. Desenvolvedor de Software em formação pela Universidade Paulista.
Sou apaixonado por aprendizado, animais, Super-Heróis, RPG de Mesa e me considero um amante do Cinema, meu livro preferido é “A Arte da Guerra” de Sun Tzu.
                    </p>
                </div>

                <div className="flex mt-10 items-center gap-7">

                    <div className="bg-gray-800/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">4
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>Anos de experiência.</span></p>
                    </div>

                </div>

            </div>

            <form
                action="https://getform.io/f/aejykgrb"
                method="POST"
                className=" max-w-6xl p-5 md:p-12"
                id="form"
            >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Fale comigo!
            </p>
            <input
                type="text"
                id="name"
                placeholder="Seu nome ..."
                name="name"
                className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Seu email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Sua mensagem ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Enviar Mensagem
            </button>
            
          </form>

        </div>
        
        </Reveal>
    </div>
  )
}

export default Contact