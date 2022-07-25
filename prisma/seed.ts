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
            {name: "HTML e CSS",term_id:1},
            {name: "JavaScript",term_id:2},
            {name: "React",term_id:3},
            {name: "Humildade",term_id:1},
            {name: "Planejamento",term_id:2},
            {name: "Autoconfiança",term_id:3}
        ]
    })

    await prisma.teacher_discipline.createMany({
        data:[

            {teacher_id:1, discipline_id:1},
            {teacher_id:1, discipline_id:2},
            {teacher_id:1, discipline_id:3},
            {teacher_id:2, discipline_id:4},
            {teacher_id:2, discipline_id:5},
            {teacher_id:2, discipline_id:6}

        ]
    })  
   
}



main().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(async ()=>{
    await prisma.$disconnect()
})