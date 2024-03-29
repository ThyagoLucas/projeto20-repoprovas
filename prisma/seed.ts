import prisma from "../src/configs/database/database.js";
import bcrypt from "bcrypt";

async function main(){
    
    await prisma.teacher.createMany({
        data:[
            {name: "Diego Pinho"},
            {name: "Bruna Hamori"}
        ]
    })

    await prisma.term.createMany({

        data:[
            {number:1},
            {number:2},
            {number:3},
            {number:4},
            {number:5},
            {number:6}
        ]
    })
    
    await prisma.category.createMany({
        data:[
            {name: "Projeto"},
            {name: "Prática"},
            {name: "Recuperação"}
        ]
    })

    await prisma.discipline.createMany({
        data:[
            {name: "HTML e CSS",termId:1},
            {name: "JavaScript",termId:2},
            {name: "React",termId:3},
            {name: "Humildade",termId:1},
            {name: "Planejamento",termId:2},
            {name: "Autoconfiança",termId:3}
        ]
    })

    await prisma.teacherDiscipline.createMany({
        data:[

            {teacherId:1, disciplineId:1},
            {teacherId:1, disciplineId:2},
            {teacherId:1, disciplineId:3},
            {teacherId:2, disciplineId:4},
            {teacherId:2, disciplineId:5},
            {teacherId:2, disciplineId:6}

        ]
    })  
   
}



main().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(async ()=>{
    await prisma.$disconnect()
})