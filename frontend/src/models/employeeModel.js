import api from '../api/employees'

const employeeModel = {

    getAllEmployee: async function getAllEmployee() {
        try {

            const response = await api.get('/employees')

            return response.data

        } catch (err) {
            console.log(err.message)

        }

    },






}
export default employeeModel;