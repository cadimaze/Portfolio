import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { AiOutlineSend } from 'react-icons/ai'
import Reveal from './Reveal'
import { Button, Card, Section, SectionHeader, Stat } from './ui'
import { useLang, renderRich } from '../i18n/LanguageContext'

const EMAILJS_SERVICE_ID = 'service_v7uq89j'
const EMAILJS_TEMPLATE_ID = 'template_jmrzaq7'
const EMAILJS_PUBLIC_KEY = 'USl4G0x5KfUHQRvGy'

const fieldClass =
  'field sunken-sm w-full rounded-2xl px-4 py-3.5 text-[13.5px] text-ink placeholder-muted/60 outline-none transition-shadow duration-200'

const labelClass = 'mb-2 block font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-muted'

const About = () => {
  const { t } = useLang()
  const a = t.about
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault()
    if (status === 'sending') return

    // carimba data/hora do envio para o template do EmailJS
    const timeField = formRef.current.elements.namedItem('time')
    if (timeField) timeField.value = new Date().toLocaleString('pt-BR')

    setStatus('sending')

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus('success')
        formRef.current.reset()
      })
      .catch(() => setStatus('error'))
  }

  const statusLine = {
    sending: { text: a.sending, className: 'text-muted' },
    success: { text: a.success, className: 'text-emerald-600 dark:text-emerald-400' },
    error: { text: a.error, className: 'text-red-500 dark:text-red-400' },
  }[status]

  return (
    <Section id="about">
      <Reveal>
        <SectionHeader num={a.num} title={a.title} subtitle={a.subtitle} meta={a.meta} />
      </Reveal>

      <div className="grid items-start gap-5 lg:grid-cols-2">
        <Reveal width="100%">
          <Card className="h-full p-7 sm:p-8">
            <h3 className="text-[17px] font-extrabold tracking-tight text-ink">
              {a.cardTitle}
            </h3>

            <div className="mt-5 space-y-4">
              {a.paragraphs.map((para, i) => (
                <p key={i} className="text-[13.5px] leading-8 text-ink/70">
                  {renderRich(para)}
                </p>
              ))}
            </div>

            <div className="mt-7 flex gap-3">
              <Stat value="6+" label={a.statExp} />
              <Stat value="4" label={a.statProjects} />
            </div>
          </Card>
        </Reveal>

        <Reveal width="100%">
          <Card className="h-full p-7 sm:p-8">
            <h3 className="text-[17px] font-extrabold tracking-tight text-ink">
              {a.formTitle}
            </h3>
            <p className="mt-2 text-[13px] leading-6 text-muted">{a.formHint}</p>

            <form ref={formRef} onSubmit={sendEmail} className="mt-6 space-y-4">
              {/* preenchido no submit, usado pelo template do EmailJS */}
              <input type="hidden" name="time" />

              <div>
                <label className={labelClass} htmlFor="from_name">
                  {a.labelName}
                </label>
                <input
                  id="from_name"
                  type="text"
                  name="from_name"
                  required
                  placeholder={a.phName}
                  className={fieldClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="reply_to">
                  {a.labelEmail}
                </label>
                <input
                  id="reply_to"
                  type="email"
                  name="reply_to"
                  required
                  placeholder={a.phEmail}
                  className={fieldClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="message">
                  {a.labelMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder={a.phMessage}
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <Button
                type="submit"
                disabled={status === 'sending'}
                icon={<AiOutlineSend size={16} />}
                className="w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? a.btnSending : a.btn}
              </Button>

              {statusLine && (
                <p
                  className={`pt-1 font-mono text-[11.5px] ${statusLine.className}`}
                  role="status"
                  aria-live="polite"
                >
                  {statusLine.text}
                </p>
              )}
            </form>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}

export default About
