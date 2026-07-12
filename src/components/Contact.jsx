import Reveal from "./Reveal"
import { SectionHeader, Window } from "./Terminal"

const Contact = () => {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-24" id="contact">
      <Reveal>
        <SectionHeader
          path="~"
          cmd="cat sobre-mim.md"
          title="quem sou eu"
        />
      </Reveal>

      <Reveal width="100%">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <Window title="sobre-mim.md">
            <div className="space-y-5">
              <p className="text-stone-300 text-sm leading-8">
                Me chamo <strong className="text-amber-400">Guilherme Cadima</strong>, tenho 25 anos e moro em São Paulo, Capital.
                Sou Desenvolvedor de Software graduado em Ciência de Dados pela Universidade Paulista,
                com foco em Engenharia de Dados e desenvolvimento back-end.
              </p>
              <p className="text-stone-300 text-sm leading-8">
                Apaixonado por tecnologia há 6 anos, trabalho diariamente com Python, AWS Cloud e pipelines de dados —
                transformando dados brutos em soluções escaláveis e confiáveis. Uso IAs como ferramenta de produtividade
                para acelerar e aprimorar o desenvolvimento.
              </p>
              <p className="text-stone-300 text-sm leading-8">
                Tenho uma paixão crescente por{' '}
                <strong className="text-amber-400">Machine Learning</strong> — estudo algoritmos, modelos preditivos
                e aplicações práticas com Python. Meu próximo objetivo é atuar de forma dedicada nessa área,
                unindo minha base sólida em Engenharia de Dados com a inteligência dos modelos.
              </p>
              <p className="text-stone-300 text-sm leading-8">
                Fora do código, sou pai de uma linda menina, torcedor roxo do São Paulo FC,
                fã de academia, animais, Super-Heróis, RPG de Mesa e Cinema.
                Meu livro favorito é <em>&ldquo;1984&rdquo;</em> de George Orwell.
              </p>

              <div className="flex gap-3 pt-3">
                <div className="border border-stone-800 bg-[#0c0906] rounded-lg p-4 flex-1 text-center">
                  <p className="text-2xl font-bold text-amber-400 font-mono">6<span className="text-amber-400">+</span></p>
                  <p className="text-stone-500 text-[11px] mt-1 font-mono">anos de experiência</p>
                </div>
                <div className="border border-stone-800 bg-[#0c0906] rounded-lg p-4 flex-1 text-center">
                  <p className="text-2xl font-bold text-amber-400 font-mono">3<span className="text-amber-400">+</span></p>
                  <p className="text-stone-500 text-[11px] mt-1 font-mono">projetos entregues</p>
                </div>
              </div>
            </div>
          </Window>

          <Window title="enviar-mensagem.sh">
            <form
              action="https://getform.io/f/aejykgrb"
              method="POST"
              className="space-y-4"
            >
              <p className="font-mono text-sm text-stone-400 mb-2">
                <span className="text-amber-500">$</span> ./contato --iniciar
              </p>
              <div>
                <label className="block font-mono text-xs text-amber-400/70 mb-1.5">&gt; nome</label>
                <input
                  type="text"
                  name="name"
                  placeholder="seu nome"
                  className="w-full rounded border border-stone-700 bg-[#0c0906] text-stone-200 font-mono text-sm py-2.5 px-3 placeholder-stone-600 focus:outline-none focus:border-amber-600 transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-amber-400/70 mb-1.5">&gt; email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  className="w-full rounded border border-stone-700 bg-[#0c0906] text-stone-200 font-mono text-sm py-2.5 px-3 placeholder-stone-600 focus:outline-none focus:border-amber-600 transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-amber-400/70 mb-1.5">&gt; mensagem</label>
                <textarea
                  name="textarea"
                  rows="4"
                  placeholder="sua mensagem..."
                  className="w-full rounded border border-stone-700 bg-[#0c0906] text-stone-200 font-mono text-sm py-2.5 px-3 placeholder-stone-600 focus:outline-none focus:border-amber-600 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded font-mono font-bold text-sm text-[#0b0906] bg-amber-400 hover:bg-amber-300 transition-colors duration-300"
              >
                [ enviar_mensagem ]
              </button>
            </form>
          </Window>
        </div>
      </Reveal>
    </div>
  )
}

export default Contact
