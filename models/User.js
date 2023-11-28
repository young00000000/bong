const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            UserId: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            auth: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            name: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            number: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            Eemail: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            platform: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            isBlack: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            grade: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            address: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            snsId:{ //kakao에서 넘어오는 아이디
                type: Sequelize.STRING(50),
                allowNull: false,
                
            },

        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    
}