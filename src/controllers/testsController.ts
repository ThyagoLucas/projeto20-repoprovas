import { Request, Response } from "express"
import { CreatTest } from "../repositories/testRepository.js";
import * as testService from "../services/testService.js";


export async function add(req: Request, res: Response){

    const test = req.body as CreatTest;

    await testService.add(test);
   
    res.status(201).send('added');
}

export async function getAll(req: Request, res: Response){

    const query = req.query;

    let tests = {};

    if( query.groupBy === 'disciplines' )[
        tests = await testService.getAllByDisciplines()
    ]
    if( query.groupBy === 'teachers' ){
        
    }

    res.status(201).send(tests);
}
