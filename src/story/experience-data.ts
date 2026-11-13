import office from '@/assets/rosa-office.jpg';
import desk from '@/assets/rosa-desk.jpg';
import ebi from '@/assets/ebi.mp3.asset.json';
import all from '@/assets/all-of-me.mp3.asset.json';
import dark from '@/assets/dark-red.mp3.asset.json';
export const backgrounds = { office, desk };
export const locations = { origin: [34.2938056, 47.0269167] as [number, number], destination: [32.3344167, 50.8541944] as [number, number] };
export const introLines = ['رسیدیم به قلمرو پرنسس… 🍓', 'خب، داری می‌پرسی اینجا کجاست؟', 'اینجا شاید اولین دفتر شماست خانوم دکتر!', 'چون می‌دونم تلاشات داره نتیجه می‌ده فسقلی،', 'و هر روز از روز قبلت بیشتر داری پیشرفت می‌کنی.'];
export const flowers = [
 {name:'آفتابگردون', icon:'🌻', text:'این یکی رو گرفتم چون دیدم داره دنبال آفتاب می‌گرده، اومدم آفتاب نشونش بدم! بی‌شوخی بهت میاد، به پرانرژی بودنت… خلاصه این یکی سهم اون روی خوشگل و شلوغته.'},
 {name:'رز', icon:'🌹', text:'اینجا دیگه انتخاب با من نبود؛ کی واسه عزیزترین آدم زندگیش رز نمی‌گیره؟ خوشگله، لطیفه و قشنگه… البته با یه فاصلهٔ خیلی زیادی از تو، چون به پای تو نمی‌رسه؛ چه یه گل چه هر چیز دیگه‌ای. ولی خب بیشتر از اینم از یه گل بیچاره انتظار ندارم.'},
 {name:'لیلیوم', icon:'🤍', text:'اینم مخصوص خودته، چون گل موردعلاقه‌ته. نه حرف اضافه و نه فلسفه‌ای؛ فقط چون «رزا دوست داره پس اینو باید بگیرم». و خب من در مقابل چیزایی که دوست داری قدرت تصمیم‌گیری ندارم، باید بگیرمش.'},
];
export const tracks = [{title:'خانوم گل',artist:'ابی',src:ebi.url},{title:'All of Me',artist:'John Legend',src:all.url},{title:'Dark Red',artist:'Steve Lacy',src:dark.url}];
export const deskItems = [
 {id:'flowers',label:'گل‌های تو',icon:'🌻',x:20,y:24}, {id:'cake',label:'کیک تولدت',icon:'🎂',x:76,y:24},
 {id:'energy',label:'سوخت خانوم دکتر',icon:'⚡',x:51,y:20}, {id:'coffee',label:'آیس کارامل ماکیاتو',icon:'🧊',x:35,y:52},
 {id:'file',label:'پروندهٔ مراجع',icon:'📋',x:73,y:66}, {id:'music',label:'برای گوش‌های رزا',icon:'🎧',x:25,y:80},
 {id:'drawer',label:'توی کشو چی هست؟',icon:'♡',x:87,y:94},
] as const;
export type DeskItem = typeof deskItems[number]['id'];
