import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = (setColors) => {
    return axiosWithAuth()
        .get('http://localhost:5000/api/colors')
        .then(resp => {
            setColors(resp.data)
        })
        .catch(err => {
            console.error(err);
        })
}

export default fetchColorService;