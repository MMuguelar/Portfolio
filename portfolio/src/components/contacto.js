export default function Contacto() {

    return(
<>

<section className="section" id="contact">
        <div className="container text-center">
            <p className="section-subtitle">How can you communicate?</p>
            <h6 className="section-title mb-5">¡Contactanos!</h6> {/*no sé porque lo tacha xd */}
            {/* contact form */}
            <form action="" className="contact-form col-md-10 col-lg-8 m-auto">
                <div className="form-row">
                    <div className="form-group col-sm-6">
                        <input type="text" size="50" className="form-control" placeholder="Your Name" required/>                 
                    </div>
                    <div className="form-group col-sm-6">
                        <input type="email" className="form-control" placeholder="Enter Email" required />                 
                    </div>
                    <div className="form-group col-sm-12">
                        <textarea name="comment" id="comment" rows="6"   className="form-control" placeholder="Write Something"></textarea>
                    </div>
                    <div className="form-group col-sm-12 mt-3">
                        <input type="submit" value="Send Message" className="btn btn-outline-primary rounded"/>                  
                    </div>
                </div>  
            </form>{/* end of contact form */}
        </div>{/* end of container */}
    </section>{/* end of contact section */}
    
    <div className="container">
        <footer className="footer">       
            <p className="mb-0">Octavio S y Mateo M 2023</p>
            <p className="mb-0">redes sociales: mateo.con.fotos en instagram</p>
            <p className="mb-0">mail: soyMateo2005@gmai.com</p>
            <p className="mb-0">numero: 54 9 11 2331-5554</p>
            {/*<div className="social-links text-right m-auto ml-sm-auto">
                <a href="javascript:void(0)" className="link"><i className="ti-facebook"></i></a>
                <a href="javascript:void(0)" className="link"><i className="ti-twitter-alt"></i></a>
                <a href="javascript:void(0)" className="link"><i className="ti-google"></i></a>
                <a href="javascript:void(0)" className="link"><i className="ti-pinterest-alt"></i></a>
                <a href="javascript:void(0)" className="link"><i className="ti-instagram"></i></a>
                <a href="javascript:void(0)" className="link"><i className="ti-rss"></i></a>
    </div>*/}
        </footer>
    </div>
    
</>
)

}