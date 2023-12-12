const { response } = require('express');
const {db} = require('../config/connection');

//----------------SELECT
const getPizza = async(req, res) => {
    const response = await db.any('SELECT * FROM PIZZAS;');
    res.json(response);
}

const getPizzaByID = async(req, res) => {
    const id = req.params.id;//parametro
    const response = await db.any(`SELECT * FROM pizzas WHERE piz_id = ${id};`);
    res.json(response);
}

//-------------------------INSERTS
//Any => array de varios datos
//One => un solo objeto
//none => ningun registros
const createPizza = async(req, res) => {
    const {piz_name, piz_origin} = req.query;    
    try {
        const response = await db.one(`INSERT INTO public.pizzas(
            piz_name, piz_origin, piz_state)
            VALUES ($1, $2, true) RETURNING *;`, [piz_name, piz_origin]);

        res.json({
            message: 'Pizza created successfully',
            body:{
                pizza: {
                    piz_name: response.piz_name,
                    response
                }
            }
        });
    } catch (err) {
        res.json({
            message: 'Error creating pizza',
            error:{
                error_code: err.message
            }
        });
    }
}

//-----------------UPDATE
const updatePizza = async(req, res) => {
    const {piz_id, piz_name, piz_origin, piz_state} = req.query;
    try {
        const response = await db.one(`UPDATE public.pizzas
        SET piz_name=$2, piz_origin=$3, piz_state=$4
        WHERE piz_id = $1 RETURNING* ;`, [piz_id, piz_name, piz_origin, piz_state]);

        res.json({
            message: 'Pizza update successfully',
            body:{
                pizza: {
                    response
                }
            }
        });
    } catch (err) {
        res.json({
            message: 'Error creating pizza',
            error:{
                error_code: err
            }
        });
    }
}

//-----------------DELETE
const deletePizza = async(req, res) => {
    const {piz_id} = req.query;
    try {
        const response = await db.one(`DELETE FROM public.pizzas
        WHERE piz_id = $1 RETURNING* ;`, [piz_id]);

        res.json({
            message: 'Pizza delete successfully',
            body:{
                pizza: {
                    response
                }
            }
        });
    } catch (err) {
        res.json({
            message: 'Error creating pizza',
            error:{
                error_code: err.detail
            }
        });
    }
}

module.exports = {
    getPizza,
    getPizzaByID,
    createPizza,
    updatePizza,
    deletePizza
}
