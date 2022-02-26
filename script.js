window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("navbar").style.width = "100%";
    document.getElementById("navbar").style.zIndex = "100";
    document.getElementById("logo").style.fontSize = "25px";
    // document.getElementById("navbar").style.marginTop = "-76px";
    document.getElementById("navbar").style.transition = "0s";
  } else {
    document.getElementById("navbar").style.marginTop = "0px";
    document.getElementById("navbar").style.width = "100%";
    document.getElementById("logo").style.fontSize = "1.25rem";
    document.getElementById("navbar").style.position = "relative";
    document.getElementById("navbar").style.transition = "0.7s";
  }
}
const excos = [
  {
    img: "IMG-20220222-WA0011.jpg",
    name: "Abbah Theresa ogwa",
    number: "09072643146",
    email: "theresabbah9@gmail.com",
    post: "Campus Coordinator",
  },
  {
    img: "IMG-20220222-WA0012.jpg",
    name: "Ayobola Liasu",
    number: "08140978262",
    email: "afaliasu@yahoo.com",
    post: "Assitant Campus Coordinator",
  },
  {
    img: "IMG-20220222-WA0013.jpg",
    name: "Busayo Oyagbile",
    number: "09033145488",
    email: "busahyorp@gmail.com",
    post: "Financial Secretary",
  },

  {
    img: "IMG-20220222-WA0020.jpg",
    name: "Abbah Ochanya",
    number: "09038701949",
    email: "ochanyaabbah87@gmail.com",
    post: "Auditor",
  },
];
let postLayout = document.querySelector("#post-layout");
let post = "";
excos.forEach((e, i) => {
  if (i == 1) {
    post += `<div class="col-md-6"><div class="card mb-3" style="max-width: 640px;">
    <div class="row no-gutters">
      <div class="col-lg-4">
        <img src="../images/${e.img}" class="card-img" alt="..." height="100%" object-fit="contain">
      </div>
      <div class="col-lg-8">
        <div class="card-body">
          <h5 class="card-title">Name: ${e.name}</h5>
          <p class="card-text">Post: ${e.post}</p>
          <p class="card-text">Phone number: ${e.number}</p>
          <p class="card-text">E-mail: ${e.email}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div></div>`;
  } else {
    post += `<div class="col-md-6"><div class="card mb-3" style="max-width: 640px;">
    <div class="row no-gutters">
      <div class="col-lg-4 ">
        <img src="../images/${e.img}" class="card-img" alt="..."  object-fit="contain">
      </div>
      <div class="col-lg-8">
        <div class="card-body">
          <h5 class="card-title">Name: ${e.name}</h5>
          <p class="card-text">Post: ${e.post}</p>
          <p class="card-text">Phone number: ${e.number}</p>
          <p class="card-text">E-mail: ${e.email}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div></div>`;
  }
  postLayout.innerHTML = post;
});
