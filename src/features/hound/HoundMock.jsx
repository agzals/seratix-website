// Pratinjau statis inbox Hound. SEMUA data fiktif. Selalu bertema gelap (seperti mockup dashboard di hero),
// sehingga tampil benar di mode terang maupun gelap. Gaya ada di styles/brand.css (.hmock).
export default function HoundMock({ caption = true }) {
  return (
    <figure className="hmock-wrap">
      <div className="hmock" role="img" aria-label="Contoh tampilan inbox Seratix Hound: percakapan WhatsApp dengan hitung mundur jendela 24 jam, catatan internal, dan pengingat chat belum dibalas">
        <div className="hmock-bar" aria-hidden="true"><span /><span /><span /></div>
        <div className="hmock-head" aria-hidden="true">
          <span className="hmock-avatar">SA</span>
          <div>
            <b>Siti Aminah</b>
            <p><span className="hmock-ch">WhatsApp</span> <span className="hmock-win">◷ Sisa 22j 14m</span></p>
          </div>
        </div>
        <div className="hmock-body" aria-hidden="true">
          <p className="hmock-msg hmock-in">Kak, brownies box ukuran 20 masih ada?<small>14.02</small></p>
          <p className="hmock-msg hmock-in">Buat besok sore bisa?<small>14.03</small></p>
          <p className="hmock-msg hmock-note"><b>🔒 Catatan internal · Rina</b>Stok tinggal 6 box, tawarkan ukuran 16.</p>
          <p className="hmock-msg hmock-out"><b>Rina</b>Ready kak! Besok sore bisa diambil jam 4 🙌<small>14.06 ✓✓</small></p>
        </div>
        <div className="hmock-chips" aria-hidden="true"><span>/halo</span><span>/ongkir</span><span>/jam</span></div>
        <div className="hmock-alert" aria-hidden="true">
          <span>🐕</span>
          <div><b>2 chat belum dibalas &gt; 1 jam</b><p>Hound mengingatkan sebelum pelanggan pergi.</p></div>
        </div>
      </div>
      {caption && <figcaption>Contoh tampilan · data fiktif</figcaption>}
    </figure>
  )
}
