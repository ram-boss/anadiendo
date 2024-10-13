let btn = document.getElementById("btn").addEventListener("click", function(){

 
    const XHR = new XMLHttpRequest();
    
    
    XHR.onreadystatechange = function(){
    
        if (XHR.readyState == 4 && XHR.status == 200) {
           
            
            let datosOb = JSON.parse(XHR.responseText);
            //console.log(datosOb);
            for (const valor of datosOb) {
                let jon=  document.getElementById("articulos").innerHTML += `<section id="jon">
                <article style = "background-image: url('${valor.imagen}');">
                
                  <h6>
                  ${valor.Informe}
                  </h6>
                </article>
                <input id="btn" type="button" value="leer Mas"/>
              </section>`
               
            }
            
            
            // for (const valor of datosOb) {
                //  let caja = document.createElement("article");
                //  caja.setAttribute("id", "sect")
              
              
            //}
    
    
    
         
    
            
        }else{
          const alr = document;

          let ra = " Se a detectado una amenaza"

          const habla = (ra) => speechSynthesis.speak(new SpeechSynthesisUtterance(ra));
          habla(ra);

          setTimeout(() => {
            alr.querySelector("#aud").play()
        },5000);
       
          let jon=  document.getElementById("articulos").innerHTML = `
          
         
                <article style = "background-image: url('th.jpeg');">
                
                  <h6 style="color: red; font-weight: bold; ">
                  Se a detectado una amenaza,Se a detectado una amenaza,Se a detectado una amenaza,Se a detectado una amenaza
                  </h6>
                </article>
               
            
          <audio id="aud" src="zagaden_only_one_feat_teddy_bala_visualizer_aac_72533.m4a" controls></audio>
          `
          
        }
    
       
    }
    XHR.open("GET","ajax.json");
    XHR.send();
    
   // console.log(XHR);
     })