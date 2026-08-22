import { BsPatchCheckFill } from 'react-icons/bs'
import { Card, IconTile, Section, SectionHeader, Tag } from './ui'
import GsapStagger from './fx/GsapStagger'
import { useLang } from '../i18n/LanguageContext'

const Certifications = () => {
  const { t } = useLang()

  return (
    <Section id="certifications">
      <SectionHeader
        num={t.certifications.num}
        title={t.certifications.title}
        subtitle={t.certifications.subtitle}
        meta={t.certifications.meta}
      />

      <GsapStagger
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        selector=":scope > div"
        stagger={0.06}
      >
        {t.certifications.items.map((cert, index) => (
          <div key={cert.name}>
            <Card tilt max={6} className="flex h-full flex-col gap-4 p-5">
              <div className="flex items-start gap-4">
                <IconTile size="sm">
                  <BsPatchCheckFill />
                </IconTile>
                <div className="min-w-0">
                  <p className="text-[14.5px] font-extrabold leading-snug tracking-tight text-ink">
                    {cert.name}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-muted">
                    {t.certifications.issued} {cert.issuer}
                  </p>
                </div>
                <span className="ml-auto shrink-0 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="mt-auto">
                <Tag>{cert.tag}</Tag>
              </div>
            </Card>
          </div>
        ))}
      </GsapStagger>
    </Section>
  )
}

export default Certifications
