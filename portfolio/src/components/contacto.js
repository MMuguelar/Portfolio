import react from 'react';
import { Link, Outlet } from "react-router-dom";

export default function Contacto() {

    return(
<>

{/*<form>
<div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label"></label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value=""/>
    </div>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Tema</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary mb-2">enviar</button>
</form>
<br></br>
*/}




<section class="section" id="contact">
        <div class="container text-center">
            <p class="section-subtitle">How can you communicate?</p>
            <h6 class="section-title mb-5">¡Contactanos!</h6> {/*no sé porque lo tacha xd */}
            {/* contact form */}
            <form action="" class="contact-form col-md-10 col-lg-8 m-auto">
                <div class="form-row">
                    <div class="form-group col-sm-6">
                        <input type="text" size="50" class="form-control" placeholder="Your Name" required/>                 
                    </div>
                    <div class="form-group col-sm-6">
                        <input type="email" class="form-control" placeholder="Enter Email"requried/>                 
                    </div>
                    <div class="form-group col-sm-12">
                        <textarea name="comment" id="comment" rows="6"   class="form-control" placeholder="Write Something"></textarea>
                    </div>
                    <div class="form-group col-sm-12 mt-3">
                        <input type="submit" value="Send Message" class="btn btn-outline-primary rounded"/>                  
                    </div>
                </div>  
            </form>{/* end of contact form */}
        </div>{/* end of container */}
    </section>{/* end of contact section */}
    
    <div class="container">
        <footer class="footer">       
            <p class="mb-0">Octavio S y Mateo M 2023</p>
            <p class="mb-0">redes sociales: mateo.con.fotos en instagram</p>
            <p class="mb-0">mail: soyMateo2005@gmai.com</p>
            <p class="mb-0">numero: 54 9 11 2331-5554</p>
            {/*<div class="social-links text-right m-auto ml-sm-auto">
                <a href="javascript:void(0)" class="link"><i class="ti-facebook"></i></a>
                <a href="javascript:void(0)" class="link"><i class="ti-twitter-alt"></i></a>
                <a href="javascript:void(0)" class="link"><i class="ti-google"></i></a>
                <a href="javascript:void(0)" class="link"><i class="ti-pinterest-alt"></i></a>
                <a href="javascript:void(0)" class="link"><i class="ti-instagram"></i></a>
                <a href="javascript:void(0)" class="link"><i class="ti-rss"></i></a>
    </div>*/}
        </footer>
    </div>
    
</>
)

}