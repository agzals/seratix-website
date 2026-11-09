import Reveal from '../Reveal'
import Ornament from '../Ornament'
import { WEDDING } from '../data'

export default function Closing() {
  return (
    <section className="wd-section wd-closing">
      <Reveal>
        <p className="wd-intro">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
        </p>
        <p className="wd-eyebrow">Wassalamu’alaikum Wr. Wb.</p>
        <p className="wd-intro">Kami yang berbahagia,</p>
        <h2 className="wd-script wd-closing-names">{WEDDING.groom.nick} &amp; {WEDDING.bride.nick}</h2>
        <Ornament />
        <p className="wd-hashtag">{WEDDING.hashtag}</p>
      </Reveal>
    </section>
  )
}
