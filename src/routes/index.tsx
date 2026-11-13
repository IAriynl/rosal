import { createFileRoute } from '@tanstack/react-router';
import { RosaExperience } from '@/story/RosaExperience';
export const Route = createFileRoute('/')({
 head:()=>({meta:[{title:'برای رزا 🍓 | تولدت مبارک، پرنسس'},{name:'description',content:'یک سفر کوچک از کرمانشاه تا شهرکرد، برای تولد رزا؛ با گل‌ها، آهنگ‌ها و حرف‌های مخصوص تو.'},{property:'og:title',content:'برای رزا 🍓 | تولدت مبارک، پرنسس'},{property:'og:description',content:'از اینجا تا دختر هوشگله؛ یک سورپرایز تولد شخصی و تعاملی.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:RosaExperience,
});
