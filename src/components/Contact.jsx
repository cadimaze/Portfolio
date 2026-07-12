import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import Reveal from "./Reveal"
import { SectionHeader, Window } from "./Terminal"
import { useLang, renderRich } from "../i18n/LanguageContext"

const EMAILJS_SERVICE_ID  = "service_v7uq89j"
const EMAILJS_TEMPLATE_ID = "template_jmrzaq7"
const EMAILJS_PUBLIC_KEY  = "USl4G0x5KfUHQRvGy"

const Contact = () => {
  const { t } = useLang()
  const c = t.contact
  const formRef = useRef(null)
  const [status, setStatus] = useState("idle") // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault()
    if (status === "sending") return

    // carimba data/hora do envio para o template
    const timeField = formRef.current.elements.namedItem("time")
    if (timeField) timeField.value = new Date().toLocaleString("pt-BR")

    setStatus("sending")

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus("success")
        formRef.current.reset()
      })
      .catch(() => {
        setStatus("error")
      })
  }

  const statusLine = {
    sending: { text: c.sending, className: "text-stone-400" },
    success: { text: c.success, className: "text-amber-400" },
    error:   { text: c.error, className: "text-red-400" },
  }[status]

  return (
    <div className="max-w-[960px] mx-auto px-6 py-24" id="contact">
      <Reveal>
        <SectionHeader path="~" cmd={c.cmd} title={c.title} />
      </Reveal>

      <Reveal width="100%">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <Window title={c.aboutFile}>
            <div className="space-y-5">
              {c.paragraphs.map((para, i) => (
                <p key={i} className="text-stone-300 text-sm leading-8">
                  {renderRich(para)}
                </p>
              ))}

              <div className="flex gap-3 pt-3">
                <div className="border border-stone-800 bg-[#0c0906] rounded-lg p-4 flex-1 text-center">
                  <p className="text-2xl font-bold text-amber-400 font-mono">6<span className="text-amber-400">+</span></p>
                  <p className="text-stone-500 text-[11px] mt-1 font-mono">{c.statExp}</p>
                </div>
                <div className="border border-stone-800 bg-[#0c0906] rounded-lg p-4 flex-1 text-center">
                  <p className="text-2xl font-bold text-amber-400 font-mono">3<span className="text-amber-400">+</span></p>
                  <p className="text-stone-500 text-[11px] mt-1 font-mono">{c.statProjects}</p>
                </div>
              </div>
            </div>
          </Window>

          <Window title={c.formFile}>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <p className="font-mono text-sm text-stone-400 mb-2">
                <span className="text-amber-500">$</span> {c.formCmd}
              </p>

              {/* hidden: preenchido no submit para o template */}
              <input type="hidden" name="time" />

              <div>
                <label className="block font-mono text-xs text-amber-400/70 mb-1.5">&gt; {c.labelName}</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder={c.phName}
                  className="w-full rounded border border-stone-700 bg-[#0c0906] text-stone-200 font-mono text-sm py-2.5 px-3 placeholder-stone-600 focus:outline-none focus:border-amber-600 transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-amber-400/70 mb-1.5">&gt; {c.labelEmail}</label>
                <input
                  type="email"
                  name="reply_to"
                  required
                  placeholder={c.phEmail}
                  className="w-full rounded border border-stone-700 bg-[#0c0906] text-stone-200 font-mono text-sm py-2.5 px-3 placeholder-stone-600 focus:outline-none focus:border-amber-600 transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-amber-400/70 mb-1.5">&gt; {c.labelMessage}</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder={c.phMessage}
                  className="w-full rounded border border-stone-700 bg-[#0c0906] text-stone-200 font-mono text-sm py-2.5 px-3 placeholder-stone-600 focus:outline-none focus:border-amber-600 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded font-mono font-bold text-sm text-[#0b0906] bg-amber-400 hover:bg-amber-300 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? c.btnSending : c.btn}
              </button>

              {statusLine && (
                <p className={`font-mono text-xs pt-1 ${statusLine.className}`} role="status" aria-live="polite">
                  {statusLine.text}
                </p>
              )}
            </form>
          </Window>
        </div>
      </Reveal>
    </div>
  )
}

export default Contact
