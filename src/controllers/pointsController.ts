import { Request, Response } from 'express'
import knex from '../database/connection'

class PointsController {
    async create(req: Request, res: Response) {
        //descontrução destruction assigment
        const {
            name,
            email,
            whatsap,
            latitude,
            longetude,
            city,
            uf,
            items
        } = req.body;
        
        const trx = await knex.transaction()

        const point = {
            image: 'image-fake',
            name,
            email,
            whatsap,
            latitude,
            longetude,
            city,
            uf
        }
    
        const insertedIds = await trx('points').insert (point)
    
        const point_id = insertedIds[0]
    
        const pointItems = items.map((item_id: number) => {
            return {
                item_id,
                point_id
            }
        })
    
        await trx('point_items').insert(pointItems)
        await trx.commit()
    
        return res.json({ 
            //spread operator
            id: point_id,
            ...point,
         })
    }
}

export default PointsController