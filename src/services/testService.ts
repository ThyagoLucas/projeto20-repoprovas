import { CreatTest, insert } from "../repositories/testRepository.js";


export async function add (test: CreatTest){
    
    test.category_id = Number(test.category_id);
    test.teacher_discipline = Number(test.teacher_discipline);

    await insert(test);

}


export async function getAll(){

    

}