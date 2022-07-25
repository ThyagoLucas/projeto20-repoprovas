import { CreatTest, findAllTestsBydiscipline, insert } from "../repositories/testRepository.js";


export async function add (test: CreatTest){

    test.categoryId = Number(test.categoryId);
    test.teacherDiscipline = Number(test.teacherDiscipline);

    await insert(test);

}


export async function getAllByDisciplines(){

    const tests = await findAllTestsBydiscipline();

    return tests;

}

export async function getAllByTeachers(){

    

}