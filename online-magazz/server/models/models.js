const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primarykey: true, autoIncrement: true },

    email: { type: DataTypes.STRING, unique: true, },

    password: { type: DataTypes.STRING },

    role: { type: DataTypes.STRING, defaultcValue: "USER" },

})
const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primarykey: true, autoIncrement: true },

})
const BasketDevice = sequelize.define('basket_device', {
    id: { type: DataTypes.INTEGER, primarykey: true, autoIncrement: true },

})
const Device = sequelize.define('device', {
    id: { type: DataTypes.INTEGER, primarykey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.INTEGER, allowNull: 0 },
    img: { type: DataTypes.STRING, allowNull: false },
})

const Type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, primarykey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },

})
const Brand = sequelize.define('brand', {
    id: { type: DataTypes.INTEGER, primarykey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },

})

const Rating = sequelize.define('raiting', {
    id: { type: DataTypes.INTEGER, primarykey: true, autoIncrement: true },
    rate: { type: DataTypes.INTEGER, allowNull: false },

})

const Deviceinfo = sequelize.define('device_info', {
    id: { type: DataTypes.INTEGER, primarykey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },

})


const TypeBrand = sequelize.define('type_brand', {
    id: { type: DataTypes.INTEGER, primarykey: true, autoIncrement: true },
})


User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(Deviceinfo)
Deviceinfo.belongsTo(Device)





module.exports = {
    User,
    Basket,
    BasketDevice,
    Device,
    Type,
    Brand,
    Rating,
    TypeBrand,
    Deviceinfo
}













