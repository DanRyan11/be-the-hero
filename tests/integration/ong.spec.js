const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {

    beforeEach(async ()=>{
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () =>{
        await connection.destroy()
    })

    it('Should be able to create a new ONG',async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "teste de ONGs",
                email: "contato@teste.com",
                whatsapp: "99999999999",
                city: "Passos",
                uf: "MG"
            })
        expect( response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})