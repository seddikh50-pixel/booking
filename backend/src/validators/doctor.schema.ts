import { z } from "zod";

export const doctorSchema = z.object({
    fullName: z.string().min(3, "الاسم قصير"),
    email: z.string().email("ايميل غير صالح"),
    password: z.string().min(6, "كلمة المرور قصيرة"),
    bio: z.string().min(10, "السيرة قصيرة جدا"),
    phone: z.string().min(8, "رقم الهاتف يجب ان يكون اكثر من 8 أرقام"),
    specialization: z.string().min(2),
    experience: z.string(),
    consultationFee: z.string(),
    location: z.string(),
    isAvailable: z.union([z.boolean(), z.string()])
});