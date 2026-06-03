import Reveal from "./Reveal"

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-16" id="contact">
        <Reveal>
        <div className="grid md:grid-cols-2 place-items-center gap-8">
            <div>
                <div className="text-gray-300 my-3">
                    <h3 className="text-4xl font-semibold mb-5">Sobre <span className="text-purple-500">Mim</span></h3>

                    <p className="text-justify leading-8 w-11/12 mx-auto text-base text-gray-300">
                        Me chamo <strong>Guilherme Cadima</strong>, tenho 24 anos e moro em São Paulo, Capital.
                        Sou Desenvolvedor de Software cursando Análise e Desenvolvimento de Sistemas pela Universidade Paulista,
                        com foco em Engenharia de Dados e desenvolvimento back-end.
                    </p>

                    <p className="text-justify leading-8 w-11/12 mx-auto text-base text-gray-300 mt-4">
                        Apaixonado por tecnologia há 6 anos, trabalho diariamente com Python, AWS Cloud e pipelines de dados —
                        transformando dados brutos em soluções escaláveis e confiáveis. Uso IAs como ferramenta de produtividade
                        para acelerar e aprimorar o desenvolvimento.
                    </p>

                    <p className="text-justify leading-8 w-11/12 mx-auto text-base text-gray-300 mt-4">
                        Tenho uma paixão crescente por <strong className="text-purple-400">Machine Learning</strong> — estudo algoritmos,
                        modelos preditivos e aplicações práticas com Python, e tenho como objetivo próximo atuar de forma
                        dedicada nessa área, unindo minha base sólida em Engenharia de Dados com a inteligência dos modelos.
                    </p>

                    <p className="text-justify leading-8 w-11/12 mx-auto text-base text-gray-300 mt-4">
                        Fora do código, sou pai de uma linda menina, torcedor roxo do São Paulo FC,
                        fã de academia, animais, Super-Heróis, RPG de Mesa e Cinema.
                        Meu livro favorito é <em>&ldquo;1984&rdquo;</em> de George Orwell.
                    </p>
                </div>

                <div className="flex mt-10 items-center gap-7">
                    <div className="bg-gray-800/40 p-5 rounded-xl border border-purple-900/40">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">6
                            <span className="text-purple-500">+</span>
                        </h3>
                        <p className="text-xs md:text-sm text-gray-400">Anos de experiência</p>
                    </div>
                    <div className="bg-gray-800/40 p-5 rounded-xl border border-purple-900/40">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">3
                            <span className="text-purple-500">+</span>
                        </h3>
                        <p className="text-xs md:text-sm text-gray-400">Projetos entregues</p>
                    </div>
                </div>
            </div>

            <form
                action="https://getform.io/f/aejykgrb"
                method="POST"
                className="w-full max-w-md p-6 md:p-8 bg-gray-800/30 rounded-2xl border border-purple-900/30"
                id="form"
            >
            <p className="text-gray-100 font-bold text-xl mb-4">
              Fale comigo!
            </p>
            <input
                type="text"
                id="name"
                placeholder="Seu nome ..."
                name="name"
                className="mb-3 w-full rounded-lg border border-purple-800 bg-gray-900/60 text-gray-200 py-2.5 pl-3 pr-4 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            <input
              type="email"
              id="email"
              placeholder="Seu email ..."
              name="email"
              className="mb-3 w-full rounded-lg border border-purple-800 bg-gray-900/60 text-gray-200 py-2.5 pl-3 pr-4 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Sua mensagem ..."
              className="mb-4 w-full rounded-lg border border-purple-800 bg-gray-900/60 text-gray-200 py-2.5 pl-3 pr-4 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg text-gray-100 font-semibold text-base bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
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
