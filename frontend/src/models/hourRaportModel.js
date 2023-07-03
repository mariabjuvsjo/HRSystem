import api from '../api/employees'

const hourRaportModel = {

    getAllRaportFromEmployee: async function getAllRaportFromEmployee(id) {


        try {

            const response = await api.get(`/workraport/employee/${id}`)

            console.log(response.data)

            return response.data

        } catch (err) {
            console.log(err.message)

        }

    },



    addNewRaport: async function addNewRaport(content) {
        try {

            const response = await api.post('/workraport', content)

            console.log(response.data)

            return response.data

        } catch (err) {
            console.log(err.message)

        }
    },

    updateRaport: async function updateRaport(content, id) {
        try {

            await api.put(`/workraport/${id}`, content)



        } catch (err) {
            console.log(err.message)

        }
    }

}
export default hourRaportModel;