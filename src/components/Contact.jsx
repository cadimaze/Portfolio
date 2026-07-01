import Reveal from "./Reveal"

const Contact = () => {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-24" id="contact">
      <Reveal>
        <p className="font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase mb-3">Sobre Mim</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-14">Quem sou eu</h2>
      </Reveal>

      <Reveal>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <p className="text-slate-300 text-sm leading-8">
              Me chamo <strong className="text-slate-100">Guilherme Cadima</strong>, tenho 25 anos e moro em São Paulo, Capital.
              Sou Desenvolvedor de Software graduado em Ciência de Dados pela Universidade Paulista,
              com foco em Engenharia de Dados e desenvolvimento back-end.
            </p>
            <p className="text-slate-300 text-sm leading-8">
              Apaixonado por tecnologia há 6 anos, trabalho diariamente com Python, AWS Cloud e pipelines de dados —
              transformando dados brutos em soluções escaláveis e confiáveis. Uso IAs como ferramenta de produtividade
              para acelerar e aprimorar o desenvolvimento.
            </p>
            <p className="text-slate-300 text-sm leading-8">
              Tenho uma paixão crescente por{' '}
              <strong className="text-cyan-400">Machine Learning</strong> — estudo algoritmos, modelos preditivos
              e aplicações práticas com Python. Meu próximo objetivo é atuar de forma dedicada nessa área,
              unindo minha base sólida em Engenharia de Dados com a inteligência dos modelos.
            </p>
            <p className="text-slate-300 text-sm leading-8">
              Fora do código, sou pai de uma linda menina, torcedor roxo do São Paulo FC,
              fã de academia, animais, Super-Heróis, RPG de Mesa e Cinema.
              Meu livro favorito é <em>&ldquo;1984&rdquo;</em> de George Orwell.
            </p>

            <div className="flex gap-4 pt-4">
              <div className="border border-white/[0.07] bg-white/[0.025] rounded-xl p-5 flex-1 text-center">
                <p className="text-3xl font-bold text-slate-100">6<span className="text-cyan-400">+</span></p>
                <p className="text-slate-500 text-xs mt-1 font-mono tracking-wider">Anos de experiência</p>
              </div>
              <div className="border border-white/[0.07] bg-white/[0.025] rounded-xl p-5 flex-1 text-center">
                <p className="text-3xl font-bold text-slate-100">3<span className="text-cyan-400">+</span></p>
                <p className="text-slate-500 text-xs mt-1 font-mono tracking-wider">Projetos entregues</p>
              </div>
            </div>
          </div>

          <form
            action="https://getform.io/f/aejykgrb"
            method="POST"
            className="border border-white/[0.07] bg-white/[0.025] rounded-xl p-8 space-y-4"
          >
            <p className="text-slate-200 font-semibold text-base mb-2">Fale comigo</p>
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              className="w-full rounded-lg border border-white/10 bg-white/5 text-slate-200 text-sm py-3 px-4 placeholder-slate-600 focus:outline-none focus:border-cyan-700 focus:ring-1 focus:ring-cyan-800 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              className="w-full rounded-lg border border-white/10 bg-white/5 text-slate-200 text-sm py-3 px-4 placeholder-slate-600 focus:outline-none focus:border-cyan-700 focus:ring-1 focus:ring-cyan-800 transition-colors"
            />
            <textarea
              name="textarea"
              rows="5"
              placeholder="Sua mensagem"
              className="w-full rounded-lg border border-white/10 bg-white/5 text-slate-200 text-sm py-3 px-4 placeholder-slate-600 focus:outline-none focus:border-cyan-700 focus:ring-1 focus:ring-cyan-800 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg text-[#060d1a] font-semibold text-sm bg-cyan-400 hover:bg-cyan-300 transition-colors duration-300"
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
