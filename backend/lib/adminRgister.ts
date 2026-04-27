import { prisma } from "../lib/prisma.ts"; // تأكد من المسار الصحيح إلى prisma.ts
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerAdmin = () => {
    async function main() {
        const existingAdmin = await prisma.user.findFirst({
            where: { role: "ADMIN" },
        });
        if (existingAdmin) {
            console.log("Admin already exists");
            return;
        }

        const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD!, 10);
       


        await prisma.user.create({
            data: {
                name: "Admin",
                email: process.env.ADMIN_EMAIL!,
                password: hashedPassword,
                role: "ADMIN",
            },
        });
      

    }

    main()
        .catch((e) => console.error(e))
        .finally(async () => {
            await prisma.$disconnect();
        });
}