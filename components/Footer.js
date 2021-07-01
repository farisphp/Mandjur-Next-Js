import Image from 'next/image'

const Footer = () => {
    return ( 
        <>
            <div className="ma-footer-static">
                <div className="footer-static">
                    <div className="container">
                        <div className="container-inner">
                        <div className="footer-static-top">
            <div className="row">
            <div className="f-col f-col4 col-sm-4 col-md-4 col-sms-12 col-smb-12">
            <div className="footer-static-content">
            <ul className="address">
            <li><span className="fa fa-phone">&nbsp;</span>
            <div className="media-body usa">
            <p>021-31927481<br/>085890009800</p>
            </div>
            </li>
            <li><span className="fa fa-tty">&nbsp;</span>
            <div className="media-body usa">
            <p>WA: 085890009800<br/>Line: @mandjur</p>
            </div>
            </li>
            <li><span className="fa fa-envelope-o">&nbsp;</span>
            <div className="media-body usa">
            <p>Email: <a href="mailto:admin@mandjur.co.id?Subject=Mandjur%20Footer%20Contact" target="_top">admin@mandjur.co.id</a></p>
            </div>
            </li>
            <li><span className="fa fa-home">&nbsp;</span>
            <div className="media-body usa">
            <p>HOS Cokroaminoto No 1, Menteng, Jakarta Pusat</p>
            </div>
            </li>
            </ul>
            </div>
            </div>
            <div className="f-col f-col4 col-sm-4 col-md-2 col-sms-6 col-smb-12">
            <div className="footer-static-title">
            <h3>Bantuan</h3>
            </div>
            <div className="footer-static-content">
            <ul>
            <li className="first"><a href="https://www.mandjur.co.id/cara-berbelanja/">Cara Order</a></li>
            <li className="first"><a href="https://www.mandjur.co.id/cara-pembayaran/">Pembayaran</a></li>
            <li><a href="https://www.mandjur.co.id/pengiriman/">Pengiriman</a></li>
            <li><a href="https://www.mandjur.co.id/quotes/">Konfirmasi Pembayaran</a></li>
            <li><a href="https://www.mandjur.co.id/sales/guest/form/">Status Order</a></li>
            </ul>
            </div>
            </div>
            <div className="f-col f-col4 col-sm-4 col-md-2 col-sms-6 col-smb-12">
            <div className="footer-static-title">
            <h3>Information</h3>
            </div>
            <div className="footer-static-content">
            <ul>
            <li><a href="https://www.mandjur.co.id/tentang-kami/">Tentang Kami</a></li>
            <li><a href="https://www.mandjur.co.id/syarat-dan-ketentuan/">Syarat &amp; Ketentuan</a></li>
            <li className="last"><a href="https://www.mandjur.co.id/privacy-policy-cookie-restriction-mode/">Kebijakan Privacy</a></li>
            </ul>
            </div>
            </div>
            <div className="f-col f-col4 col-sm-12 col-md-4 col-sms-12 col-smb-12">
            <div className="footer-static-title">
            <h3>Metode Pembayaran</h3>
            </div>
            <div className="footer-static-content">
            <Image src="https://mandjur.co.id/media/wysiwyg/mandjur-icon-payment-bca.jpg" alt="" width={65} height={40} />
            <Image src="https://mandjur.co.id/media/wysiwyg/mandjur-icon-payment-mandiri.jpg" alt="" width={65} height={40}/>
            <Image src="https://mandjur.co.id/media/wysiwyg/mandjur-icon-payment-bni.jpg" alt="" width={65} height={40} />
            <Image src="https://mandjur.co.id/media/wysiwyg/mandjur-icon-payment-amex.jpg" alt="" width={65} height={40} />
            <Image src="https://mandjur.co.id/media/wysiwyg/mandjur-icon-payment-master-card.jpg" alt="" width={65} height={40}/>
            <Image src="https://mandjur.co.id/media/wysiwyg/mandjur-icon-payment-bank-transfer.jpg" alt="" width={65} height={40} />
            </div>
            </div>
            </div>
            </div>			</div>
                    </div>
                </div>
            </div>

            <div className="footer-coppyright">
	<div className="container">
		<div className="row">
			<div className="col-md-4 col-xs-12">
				<address>© 2013 - 2021 PT Mandjur Sehat Abadi. All Rights Reserved.</address>
			</div>
			<div className="col-md-4 col-xs-12">
							</div>	
			<div className="col-md-4 col-xs-12">			
				<div className="Payment Footer ">
									</div>
			</div>
			<div className="col-md-12 col-xs-12" style={{fontSize:"10px",textAlign:"justify",lineHeight:"12px",marginBottom:"20px"}}>
			<span><b>Disclaimer:</b> Informasi di situs ini disediakan untuk tujuan informasi saja. Hal ini tidak dimaksudkan untuk menggantikan saran yang diberikan oleh dokter atau profesional media lainnya. Anda sebaiknya tidak menggunakan informasi yang tercantum disini untuk mendiagnosa atau mengobati masalah kesehatan atau penyakit, atau membuat resep obat apapun. Jika Anda memiliki atau mencurigai bahwa Anda memiliki masalah medis, segera hubungi dokter. Kami selalu bekerja keras untuk memastikan bahwa semua informasi produk benar dan akurat, walaupun kadang-kadang produsen atau distributor suka mengubah kemasan dan produk. Anda harus menggunakan situs kami sebagai referensi, selalu membaca dengan cermat semua kemasan produk, dan hubungi pabrik atau distributor jika ada pertanyaan sebelum menggunakan produk. Kami tidak bertanggung jawab untuk ketidakakuratan atau salah informasi tentang prduk yang tertera pada kemasan. Ulasan pelanggan pada website kami hanya untuk tujuan informasi saja. Ulasan pelanggan mencerminkan hasil resensi individu dan pengalaman saja dan tidak diverifikasi atau disahkan oleh mandjur.co.id. Hasil dapat berbeda - beda antara pengguna tergantung berbagai faktor seperti genetik, usia, pola hidup, dll.</span>
			</div>
		</div>
	</div>
	<div id="back-top" className="hidden-xs" style={{display: "block"}}></div>
</div>
        </>
    );
}
 
export default Footer;