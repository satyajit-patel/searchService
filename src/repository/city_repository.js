//this path syntax is only corresponding to this repository folder ie ../
const {City} = require("../models/index.js");


class CityRepository {
    async createCity({name}) {
        try {
            const city = await City.create({name});
            return city;
        }
        catch(error) {
            throw {error};
        }
        
    }
    async deleteCity(cityId) {
        try {
            //syntax for deleting row
            await City.destroy({
                where: {
                    id : cityId
                }
            });
        }
        catch(error) {
            throw {error};
        }
    }
}
module.exports = CityRepository;