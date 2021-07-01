import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div style={{padding: "10px"}}>
      <div className=" banner_static">
      <div className="container">
      <div className="container-inner">
      <div className="row">
      <div className="col-xs-4 col-md-4 col-sm-4">
      <div className="icon-text">
      <div className="footer-icon-slogan cc_cursor" style={{margin: "auto"}}><Image className="footer-icon-slogan-img" src="https://www.mandjur.co.id/media/wysiwyg/icon-slogan-1.jpg" alt="" width={114} height={114} layout="responsive" /></div>
      <div className="text">
      <h2><a href="#">REGISTERED</a></h2>
      <p>Produk-produk berkualitas terdaftar BPOM Indonesia.</p>
      </div>
      </div>
      </div>
      <div className="col-xs-4 col-md-4 col-sm-4">
      <div className="icon-text">
      <div className="footer-icon-slogan cc_cursor" style={{margin: "auto"}}><Image className="footer-icon-slogan-img" src="https://www.mandjur.co.id/media/wysiwyg/icon-slogan-2.jpg" alt="" width={114} height={114} layout="responsive"/></div>
      <div className="text">
      <h2><a href="#">MONEY BACK GUARANTED</a></h2>
      <p>Jaminan uang kembali jika barang tidak sesuai pesanan.</p>
      </div>
      </div>
      </div>
      <div className="col-xs-4 col-md-4 col-sm-4">
      <div className="icon-text">
      <div className="footer-icon-slogan cc_cursor" style={{margin: "auto"}}><Image className="footer-icon-slogan-img" src="https://www.mandjur.co.id/media/wysiwyg/icon-slogan-4.jpg" alt="" width={114} height={114} layout="responsive"/></div>
      <div className="text">
      <h2><a href="#">SAFE WRAP</a></h2>
      <p>Packing barang yang baik kiriman aman sampai tujuan.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}
