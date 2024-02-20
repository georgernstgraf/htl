import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const schurlix = await prisma.user.findMany();
    console.log(schurlix, "created");
}

main()
    .catch((e) => {
        console.error(e.message);
    })
    .finally(async () => {
        console.log("finally disco");
        await prisma.$disconnect;
    });
