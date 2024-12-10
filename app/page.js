import Image from "next/image";


export default function Home() {
  return (
    <layout className="main_layout">
<section className="first">

<div className="header">

{/* <div className="parent_head"> */}

<div className="headlogo">
  <Image
    src="/icons8-repair 1.png" 
    alt=""
    width={30} 
    height={30}
  />
  <div>
  <h4 className="head_warrant">Wa<span>rr</span>antyWise</h4></div>
  </div>

{/* </div> */}
<a href=""><button className="login_button">Login</button></a>


</div>

<div className="line_parent">
<div className="underline_head"></div>
</div>

</section>

<section className="second">

<div className="shield">
    <Image
    src="/Frame 427319093 (1).png"
    alt=""
    height={70}
    width={60}
    />

</div>
<div>
    <h4 className="claim_h4">Claim with Confidence, Issue with Ease <br/>Your Warranty Journey Start Here.</h4>
</div>
<div className="serialcheck_parent">
    <div>
    <input className="serial_bar" type="text" id=""  placeholder="Searial Number" title=""/>
    <a href=""><p className="serial_p">how to find serial number?</p></a>
    </div>
    <a href=""> <div>
   <button className="check_button">Check</button>
    </div></a>
</div>


</section>

 <section className="mobile_ad">

  <div className="mobile_box">
    <div className="iphone_img"><Image src={"/Frame 427319097.png"} alt="" height={250} width={230}/></div>
    <div className="mobile_details">
    <p className="detail_head">iPhoneX</p>
      <p className="detail1">purchase date:January 2018 <br/>Serial Number:DNP2323TYJ29</p>
   <p className="detail_head">Your Coverage:</p>
      <p className="detail2">Coverage Expired <br/>These service options are available to you</p>
      
    <button> <a href=""> Contact US</a></button>
  </div>

  </div>


</section>

<section className="techsupport">
  <div><p>One stop for technical support,<br/>WarrantyWise service and support</p></div>
</section>



<section className="third_productsupport">
<div className="product"></div>
<p className="product_p">Product Support & Troubleshooting</p>
<div className="trouble"></div>
</section>

 <section className="fourth_icons">

<div className="parent_icon">

    <div className="icon"><Image
    src={"/speaker.png"}
    alt=""height={80}width={80}/><a href=""><p className="icon_para1">Audio & Speaker</p></a></div>
    
    <div className="icon"><Image
    src={"/battery-charging-02.png"}
    alt=""height={80}width={80}/><a href=""><p className="icon_para1">battery & Power</p></a></div>

    <div className="icon"><Image
    src={"/headphones.png"}
    alt=""height={80}width={80}/><a href=""><p className="icon_para2">Headset</p></a></div>

    <div className="icon"><Image
    src={"/mobile-protection.png"}
    alt=""height={80}width={80}/><a href=""><p className="icon_para2">Mobile</p></a></div>

</div>


</section> 

<footer className="footer_class">

    <div className="design_parent">

        <div className="design"><Image src={"/Group 427319218.png"}
        alt="" height={179}width={70}/></div>
        <div className="footer_detail">

    <div className="headlogo">
  
  <div className="bottom">
<div className="new">
<Image
    src="/icons8-repair 1.png" 
    alt=""
    width={30} 
    height={30}
  />
    <h4 className="head_warrant">Wa<span>rr</span>antyWise</h4>

</div>
 
   
    <div className="footer_iconp">
        
    <div className="footer_icon"><a href=""><Image
    src="/instagram.png" 
    alt=""
    width={20} height={21}/></a></div>
    
    <div className="footer_icon"><a href=""><Image
    src="/Vector.png" 
    alt=""
    width={20} height={18}/></a></div>

    <div className="footer_icon"><a href=""><Image
    src="/vector copy.png" 
    alt=""
    width={20} height={18}/></a></div>

    <div className="footer_icon"><a href=""><Image
    src="/youtube.png" 
    alt=""
    width={20} height={22}/></a></div>
    </div>
    <a className="all_right" href=""> © 2023 by WarrantyWise, All rights reserved.</a>
    </div>
 </div>


<div className="list_para">
 <ul>
 <a href=""><li><p>GET CONNECTED</p></li></a>

 <a href=""><li className="list_physical"><p>Physical Store Location</p></li></a>
 <a href=""><li><p>info@WarrantyWise.com</p></li></a>
 
 <a href=""><li><p>+917994125443</p></li></a>
 <span className="spans">
 <a href=""><li><p>Warranty Wise Trading LVXC Suite</p></li></a></span>
 <a href=""><li className="list_block"><p>Warrenty Wise Trading LVCK Owais Tower <br/><br/>Dubai #545 23 Street Co Al Quooos</p></li></a>
 
    </ul>
</div>


<div className="store_button"><button><a href="">Store location <Image src={"/up-right-arrow.png"}alt=""
height={10}width={10}/></a></button></div>

{/* <div className="design2"><Image src={"/_Group_.png"}alt="" height={160}width={130} className=""/></div> */}
        <div className="design"><Image src={"/Group 427319217.png"}
        alt="" height={179}width={100}/></div>
       </div> 
    


    </div>


    
  </footer>


</layout>






  );
 }
 
  
  
//  </a>
 
 
