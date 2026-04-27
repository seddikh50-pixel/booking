import { prisma } from "../../lib/prisma.ts";

export const getAllUsers = async (req: any, res: any) => {
    try {
        const users = await prisma.user.findMany();
        return res.status(200).json({ success: true, users });
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ success: false, msg: "خطأ في جلب المستخدمين" });
    }
};


export const createUser = async (req: any, res: any) => {
    const { name, email, password } = req.body;
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        return res.status(400).json({ success: false, msg: "لديك حساب بالفعل ب هذا البريد الإلكتروني" });
    }

    

    try {
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password,
                role: "PATIENT",
            },
        });



        return res.status(201).json({ success: true, msg: "تم إنشاء الحساب بنجاح", users: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ success: false, msg: "خطأ في إنشاء المستخدم" });
    }
};
