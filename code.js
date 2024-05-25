let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });



let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);



menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};

ScrollReveal({
    distance:'80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-content, .portfolio-box, .contact form', { origin: 'button' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: left });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: right });




function valid(){ 
    var FullName = document.getElementById("FullName").value;
    var EmailAddress = document.getElementById("EmailAddress").value;
    var Subject = document.getElementById("Subject").value;
    var MobileNumber = document.getElementById("MobileNumber").value;
    if(FullName == "" || EmailAddress == "" || Subject == "" || MobileNumber == "")
        {
            alert("Please Enter All Details");
            return false;
        }
        else{
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "runatmv@gmail.com",
                Password : "A4222F23B355FFE45842CFE645607856FDC7",
                To : 'runatmv@gmail.com',
                From : 'runatmv@gmail.com',
                Subject : "New content from User",
                Body : "Name:" + document.getElementById("FullName").value 
                +"<br> Email :"+ document.getElementById("EmailAddress").value 
                +"<br> Subject :"+ document.getElementById("Subject").value 
                +"<br> MobileNumber :"+ document.getElementById("MobileNumber").value 
            }).then(
              message =>alert("Thanks For Your Response :)")
            );
        }
}
