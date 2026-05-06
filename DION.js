
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
  function doPost(e) {
    var sheet = SpreadsheetApp.openById('https://docs.google.com/spreadsheets/d/1HVOquszlSZ-vbr6jx7vxYCsmSnBEmyQ1XiDMhV0A9F8/edit?gid=0#gid=0').getActiveSheet(); // Replace with your Sheet ID
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([new Date(), data.FirstName, data.Email, data.PhoneNumber, data.Message]);
    
    return ContentService.createTextOutput(JSON.stringify({ result: "Success" })).setMimeType(ContentService.MimeType.JSON);
}
