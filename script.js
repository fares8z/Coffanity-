let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.classList.add('fade-out');
    } else {
        navbar.classList.remove('fade-out');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});



window.addEventListener('load', () => {
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');
  
    setTimeout(() => {
      overlay.classList.add('active');
    }, 300);
  
    // إغلاق البوب اب لما يضغط على الزرار
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  });
  











function openModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

function submitForm(type) {
    alert(type + ' form submitted!');
    closeModal(type + 'Modal');
}

document.addEventListener('DOMContentLoaded', function () {
    const signInBtn = document.querySelector('.buttons .btn:nth-child(1)');
    const signUpBtn = document.querySelector('.buttons .btn:nth-child(2)');

    signInBtn.addEventListener('click', function () {
        openModal('signInModal');
    });

    signUpBtn.addEventListener('click', function () {
        openModal('signUpModal');
    });
}









);

const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

// Show the overlay when the page loads
window.addEventListener("load", () => {
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // تمنع الاسكرول
});

// لما المستخدم يضغط على الزر
closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  document.body.style.overflow = ""; // تسمح بالاسكرول تاني
});


document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.footer-content');
  
    function handleScroll() {
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (footerTop < windowHeight - 100) {
        footer.classList.add('show');
        footer.classList.remove('hidden');
        // نشيل الحدث علشان ميتكررش
        window.removeEventListener('scroll', handleScroll);
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });
  
