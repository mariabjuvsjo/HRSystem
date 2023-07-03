import api from '../api/employees'

const employeeModel = {

    getAllEmployee: async function getAllEmployee() {
        try {

            const response = await api.get('/employees')

            console.log(response.data)

            return response.data

        } catch (err) {
            console.log(err.message)

        }

    },

    deleteOneEmployee: async function deleteOneEmployee(id) {

        try {

            await api.delete(`/employees/${id}`)



        } catch (err) {
            console.log(err.message)

        }

    },

    addNewEmployee: async function addNewEmployee(content) {
        try {

            const response = await api.post('/employees', content)

            console.log(response.data)

            return response.data

        } catch (err) {
            console.log(err.message)

        }
    },

    updateEmployee: async function updateEmployee(content, id) {
        try {

            await api.put(`/employees/${id}`, content)



        } catch (err) {
            console.log(err.message)

        }
    }






}
export default employeeModel;