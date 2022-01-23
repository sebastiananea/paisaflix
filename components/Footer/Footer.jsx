import s from './Footer.module.css'

const Footer = () => {
  return (
    <div>
      <div className={s.footer}>
        <div className={s.footerLeft}>
          <h1>Paisaflix</h1>
          <h3>Join newsletter</h3>
          <div className={s.inputContainer}>
            <input className={s.input} type='text' />
            <div className={s.btn}>
              <img src='/arrow.png' alt='' />
            </div>
          </div>
        </div>
        <div className={s.footerRight}>
          <div className={s.lists}>
            <div className={s.list}>
              <h4 className={s.product}>Product</h4>
              <h4>Movies</h4>
              <h4>Tv Shows</h4>
              <h4>Videos</h4>
            </div>
            <div className={s.list}>
              <h4 className={s.product}>Media Group</h4>
              <h4>Nice Studio</h4>
              <h4>Nice News</h4>
              <h4>Nice Tv</h4>
            </div>
            <div className={s.list}>
              <h4 className={s.product}>Product</h4>
              <h4>Movies</h4>
              <h4>Tv Shows</h4>
              <h4>Videos</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={s.contact}>
        <span>
          {' '}
          <img src='/location.png' alt='location' /> 8819 Enrique Martinez, Bs
          As., 90280
        </span>
        <span>
          {' '}
          <img src='/Mail.png' alt='mail' />
          hola@paisanos.io
        </span>
        <span>
          {' '}
          <img src='/Phone.png' alt='phone' />
          +271 386-647-3637
        </span>
      </div>
    </div>
  )
}

export default Footer
