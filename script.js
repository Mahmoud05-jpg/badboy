const questions = [
    "ما هو أكثر شيء يحرجك؟",
    "ما هو أغرب حلم رأيته في حياتك؟",
    "هل سبق لك أن كذبت كذبة كبيرة؟",
    "ما هو أغرب شيء أكلته على الإطلاق؟"
];

const dares = [
    "ارسم شارباً على وجهك باستخدام قلم حبر.",
    "قم بتقليد شخص مشهور لمدة دقيقة.",
    "قف على رجل واحدة وغني أغنيتك المفضلة.",
    "ارقص رقصة مجنونة لمدة 30 ثانية."
];

const punishments = [
    "اشرب كأس ماء بارد بسرعة.",
    "قف على قدم واحدة لمدة دقيقة.",
    "قل نكتة سيئة بصوت عالٍ.",
    "امشِ في أرجاء الغرفة كالدجاجة لمدة دقيقة."
];

function startGame() {
    const name = document.getElementById("name").value;
    if (!name) {
        alert("يرجى إدخال اسمك.");
        return;
    }

    const wheel = document.getElementById("wheel");
    wheel.style.animation = "spin 4s ease-out forwards";

    setTimeout(() => {
        const result = Math.random() < 0.5 ? "حقيقة" : "تحدي";
        document.getElementById("result").innerText = result;

        if (result === "حقيقة") {
            const question = questions[Math.floor(Math.random() * questions.length)];
            const punishment = punishments[Math.floor(Math.random() * punishments.length)];
            document.getElementById("result").innerHTML = `
                <p>${question}</p>
                <button onclick="showPunishment('${punishment}')">لم أستطع الإجابة</button>
            `;
        } else {
            const dare = dares[Math.floor(Math.random() * dares.length)];
            const punishment = punishments[Math.floor(Math.random() * punishments.length)];
            document.getElementById("result").innerHTML = `
                <p>${dare}</p>
                <button onclick="showPunishment('${punishment}')">لم أستطع التنفيذ</button>
            `;
        }
    }, 4000);
}

function showPunishment(punishment) {
    document.getElementById("result").innerText = `عقاب: ${punishment}`;
}