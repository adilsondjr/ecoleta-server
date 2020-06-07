import { Request, Response, response } from 'express'
import knex from '../database/connection'

class PointsController {
    async show(req: Request, res: Response) {
        //const id = req.params.id - pode fazer assim e tbm tem a de baixo com desestruturação
        const { id } = req.params

        const point = await  knex('points').where('id', id).first()

        if(!point) {
            return res.status(400).json({ message: 'Point not found' })
        }

        /**
         *  SELECT ITEMS.TITLE FROM ITEMS
         *     jOIN POINT_ITEMS on ITEMS.ID = POINT_ITEMS.ITEM_ID
         *    WHERE POINT_ITEMS.POINT_ID = {ID}
         */
        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title')

        return res.json({ point, items})
    }

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