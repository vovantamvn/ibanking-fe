import axiosClient from './axiosClient'

const studentApi  = {
    getStudentInfoById: async (id) => {
        try {
            const result = await axiosClient.get('/students/' + id)
            console.log(result)

        } catch (error) {
            console.log(error)
        }
    }
}

export default studentApi
