document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('تم إرسال الرسالة بنجاح!');
  });
  function call() {
    window.location.href = "tel:++9660567414217"; // استبدل الرقم برقمك
  }
  function sendToWhatsApp() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const whatsappMsg = `الاسم: ${name}%0Aرقم الهاتف: ${phone}%0Aالبريد: ${email}%0Aالرسالة: ${message}`;
    const whatsappNumber = "9660567414217";

    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`, "_blank");
  }
