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
            await City.destroy({
                where: {
                    id : cityId
                }
            });
            return true;
        }
        catch(error) {
            throw {error};
        }
    }
    async updateCity(cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id : cityId
                }
            });
            return city;
        } catch (error) {
            console.log("someting wrong in repository layer");
            throw {error};
        }
    }
    async getCity(cityId) {
        try {
            //like :- select * from city where id = cityId;
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("someting wrong in repository layer");
            throw {error};
        }
    }
}
module.exports = CityRepository;