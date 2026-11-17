 const property = [
   {
      name: "vs code installation",
      src: "/assets/videos/html.mp4",
      availability: false,
      description:"This video should teach you how to install visual studio code and live server"
   },

      {
      name: "html, css, javascript" ,
      src: "/assets/videos/html,css,js.mp4",
      availability: true,
      description:"Learn HTML, CSS, and JavaScript with Kotech! 💻🚀 Build your first website step by step and start your coding journey today. "

      

   },



 ]

 property.forEach((item)=>{
   let body=document.getElementById("body-js");
   let div=document.createElement("div");
   body.append(div);
   let viddiv=document.createElement("div");
   div.appendChild(viddiv);
   let video=document.createElement("video");
   video.src=item.src;
   video.controls=" ";
   video.muted=" ";
   viddiv.appendChild(video);  
   let paragraph=document.createElement("p");
   paragraph.textContent=item.description;
   viddiv.appendChild(paragraph);
      let paragraph2=document.createElement("p");
   paragraph2.textContent=item.name;
   viddiv.appendChild(paragraph2);
 })