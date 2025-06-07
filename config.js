import { watchFile, unwatchFile } from  fs 
import chalk from  chalk 
import { fileURLToPath } from  url 
import fs from  fs 

import dotenv from  dotenv 
dotenv.config()

const ownervb = process.env.OWNERS || "212637915359"


const ownerlist = ownervb.split( ; );

global.owner = [];
for (let i = 0; i < ownerlist.length; i += 2) {
    const owner = [
        ownerlist[i],            
        ownerlist[i + 1],         
        true                        
    ];
    global.owner.push(owner);
}

//global.pairingNumber = "" //put your bot number her

global.mods = [ 212637915359 ,  212667903423 ]
global.prems = [ 212637915359 ,  212677735523 ,  212667903423 ]
global.allowed = [ 212637915359 ,  212667903423 ]
global.keysZens = [ c2459db922 ,  37CC845916 ,  6fb0eff124 ]
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = [
   29d4b59a4aa687ca ,
   5LTV57azwaid7dXfz5fzJu ,
   cb15ed422c71a2fb ,
   5bd33b276d41d6b4 ,
   HIRO ,
   kurrxd09 ,
   ebb6251cc00f9c63 ,
]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = [ 5VC9rvNx ,  cfALv5 ]
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = [ GataDios ]

global.APIs = {
  // API Prefix
  // name:  https://website 
  xteam:  https://api.xteam.xyz ,
  dzx:  https://api.dhamzxploit.my.id ,
  lol:  https://api.lolhuman.xyz ,
  violetics:  https://violetics.pw ,
  neoxr:  https://api.neoxr.my.id ,
  zenzapis:  https://zenzapis.xyz ,
  akuari:  https://api.akuari.my.id ,
  akuari2:  https://apimu.my.id ,
  nrtm:  https://fg-nrtm.ddns.net ,
  bg:  http://bochil.ddns.net ,
  fgmods:  https://api-fgmods.ddns.net ,
}
global.APIKeys = {
  // APIKey Here
  //  https://website :  apikey 
   https://api.xteam.xyz :  d90a9e986e18778b ,
   https://api.lolhuman.xyz :  85faf717d0545d14074659ad ,
   https://api.neoxr.my.id : `${BBnoBt}`,
   https://violetics.pw :  beta ,
   https://zenzapis.xyz : `${keysxxx}`,
   https://api-fgmods.ddns.net :  fg-dylux ,
}
global.waitMessages = [
    "*⌛ جواد قاعد **يفك تشفير** ذكرياتك المحرجة... استنى شوي! 🤫📂*",
    "*⌛ **تحذير**: جواد عثر على **سجل بحثك عام 2012**... يا الله! 🌚🔍*",
    "*⌛ **تم الكشف عن تطفلك**... جواد بيسحب داتا من **الداك نت**... استنا 🖥️👁️*",
    "*⌛ جواد **لقى سجل البحث بتاعك**...  كيف تتخلص من جثة ? 🧐🔪*",
    "*⌛ **انتبه!** جواد عنده **سكرين شوت لصورتك الشخصية**... من 2016! 😂📸*",
    "*⌛ جواد دخل في **مود القرصنة**... لو تضغط كتير راح **يشتري لك دومين بإسمك!** 💻🔥*",
    "*⌛ **جواد** قاعد **يسوي لك ملف سري**... فيه كل **أخطائك في الترجمة**! 🕵️♂️📜*",
    "*⌛ **تم اختراق جهازك بنجاح!**... لا، مزحه، بس جواد قاعد **يقرأ رسايلك القديمة** 🤭📂*",
    "*⌛ **جـاواد** قاعد **يُفكك** ملفاتك... ما تضمن النتايج، صديقي 🕵️♂️💀*",
    "*⌛ **تحذير**: جواد عنده **معلوماتك البنكية**... خليني أخلص شغلي أول 🤫💰*",
    "*⌛ جواد **دخل في ملفاتك الشخصية**...وجد أشياء لن تنساها أنت - أو نسيها العالم! 🌚💻*",
    "*⌛ جارٍ البحث عن علاقتك **باغتيال كينيدي**... انتظر! 🕵️‍♂️🔎*",
    "*⌛ نظامنا اكتشف أنك **زرت موقعاً إباحياً عام 2007**... التحليل جارٍ! 🌐😳*",
    "*⌛ جواد يحلل بياناتك... **واكتشف أنك سطر برمجي** في محاكاة كمبيوتر! 🤯💾*",
    "*⌛ **وجدنا رسائلك القديمة لحبيبتك**... سنرسلها لزوجتك الحالية إلا إذا ضغطت ❤️ الآن! 💌🔫*",
    "*⌛ جواد **يتجسس على اتصالاتك**... وجدنا مكالمة مع **رئيس المافيا**! 📞👀*",
    "*⌛ **جارٍ تحميل أسرارك**... 47% أنها ستُباع في **Dark Web**! 💀🌐*",
    "*⌛ جواد **يعيد تشغيل ذكرياتك المحرجة**... هل تريد حذفها؟ (السعر: 100 دولار) 🧠💸*",
    "*⌛ **تم العثور على صورك من حفل 2010**... سنستخدمها للابتزاز! 📸😂*",
    "*⌛ جواد **يخترق كاميرا جهازك**... ابتسم! 📷👻*",
    "*⌛ **تحليل البيانات** يكشف أنك **أرسلت رسالة حب لمعلمتك** في الابتدائية! 💌😅*",
    "*⌛ جواد **يعيد تشغيل** طفولتك... وجدنا أنك **سرقت حلوى من المتجر**! 🍬👶*",
    "*⌛ **جارٍ فحص جهازك**... وجدنا **10 تيرا بايت من الميمز السيئة**! 🚨😂*",
    "*⌛ جواد **يقرأ أفكارك**... واكتشف أنك **تريد بيتزا** الآن! 🍕🤯*",
    "*⌛ **تحذير**: جواد **يعرف مكانك الآن**... وهو قادم لزيارتك! 🏃‍♂️💨*",
    "*⌛ **جارٍ تحليل**... يبدو أنك **أعدت مشاهدة مسلسل عربي 20 مرة**! 📺😭*",
    "*⌛ جواد **يستعيد ملفاتك المحذوفة**... بما فيها **صور العيد القديمة**! 📸🙈*",
    "*⌛ **تم الكشف عنك**... أنت **أول من بحث عن  كيف تصبح هاكر  في 2008**! 💻😎*",
    "*⌛ جواد **يقرأ رسائلك النصية**... وجدنا **اعترافاتك الغريبة**! 📱🤪*",
    "*⌛ **جارٍ فحص**... يبدو أنك **تستحق جائزة أطول وقت ضائع على النت**! 🏆😴*",
    "*⌛ جواد **يكتشف** أنك **تتظاهر بالعمل** بينما تشاهد التيك توك! 📱😂*",
    "*⌛ **تحليل الصور** يكشف أنك **ترتدي نفس الملابس منذ 3 أيام**! 👕😅*",
    "*⌛ جواد **يعيد تشغيل** ذكرياتك... وجدنا **رقصتك في حفل الزفاف**! 💃🎥*",
    "*⌛ **جارٍ البحث**... يبدو أنك **أول من شاهد مقطع القطط هذا**! 🐱👀*",
    "*⌛ جواد **يستعيد** محادثاتك القديمة... **يا للعار!** 💬😳*",
    "*⌛ **تحذير**: جواد **يعرف كم مرة تبكي على المسلسلات**! 📺😭*",
    "*⌛ **جارٍ التحقق**... هل تعلم أنك **بحثت عن  هل أنا جميل؟  50 مرة**؟ 🤳😂*",
    "*⌛ جواد **يكتشف** أنك **تخفي أكياس شيبس تحت السرير**! 🛏️🍟*",
    "*⌛ **تحليل الصوت** يكشف أنك **تغني تحت الدش**... بصوت مرعب! 🎤👻*",
    "*⌛ جواد **يراقبك**... نعم، حتى الآن وأنت تقرأ هذا! 👀🕵️‍♂️*",
    "*⌛ **جارٍ فحص**... وجدنا **بحثك عن  كيف تتعامل مع الفشل **... حظاً أوفر! 🍀😅*",
    "*⌛ جواد **يعيد تشغيل** كاميرات المراقبة... **يا إلهي! ماذا فعلت عام 2015؟** 📹🙊*",
    "*⌛ **تحليل البيانات** يكشف أنك **تتظاهر بالفهم** بينما أنت ضائع! 🤔💫*",
    "*⌛ جواد **يقرأ يومياتك القديمة**... **يا للأسف!** 📖😬*",
    "*⌛ **جارٍ البحث**... يبدو أنك **أرسلت رسالة خاطئة لمديرك**! 💼😱*",
    "*⌛ جواد **يكتشف** أنك **تأكل البيتزا من الوسط**... مجرم! 🍕🚨*",
    "*⌛ **تحذير**: جواد **يعرف سرّك**... وهو **أسوأ مما تظن**! 🤫💀*",
    "*⌛ **جارٍ التحليل**... هل تعلم أنك **السبب في انقراض الميمز الجيدة**؟ 🦖😂*",
    "*⌛ جواد **يستعيد** محادثاتك... **لماذا تكتب  هههههه  بهذا الشكل؟** 💬🤔*"
];

// اختيار رسالة عشوائية عند كل استدعاء
global.wait = () => {
    const randomMessage = global.waitMessages[Math.floor(Math.random() * global.waitMessages.length)];
    return `${randomMessage}\n*▰▰▰▱▱▱▱▱*`;
};

// Sticker WM
global.botname = process.env.BOTNAME
global.premium =  true 
global.packname =  𝐹𝒶𝓃𝑔𝟩𝓍  ✨ 
global.author =  الستيكر ذا بتاع جواد اللي يسرقو gay 
global.menuvid =   
global.igfg =   
global.dygp =   
global.fgsc =  https://github.com/SilvaTechB/silva-md-bot 
global.fgyt =  https://youtube.com/@silvaedits254 
global.fgpyp =  https://youtube.com/@silvaedits254 
global.fglog =   
global.thumb = fs.readFileSync( ./jusorts/sylivanus.jpg )

global.wait = global.wait()
global.rwait =  ⌛ 
global.dmoji =  🤭 
global.done =  ✅ 
global.error =  ❌ 
global.xmoji =  🔥 

global.multiplier = 69
global.maxwarn =  3 

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update  config.js "))
  import(`${file}?update=${Date.now()}`)
})
