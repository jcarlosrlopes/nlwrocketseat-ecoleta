import knex from '../database/connection';
import { Request, Response } from 'express';

class ItemController {
    async index(request: Request, response: Response) { // devido ao usu
        const items = await knex('items').select('*'); //com o await o javascript espera o termino da execução para então continuar o restante do código
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                name: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`
            };
        });
    
        return response.json(serializedItems)
    }
}

export default ItemController;