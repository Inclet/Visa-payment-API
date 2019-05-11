'use strict';
const Financials = (sequelize, DataTypes) => {
  const Financials = sequelize.define('Financials', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    cardNumber: DataTypes.BIGINT,
    amount: DataTypes.BIGINT
  }, {});

  Financials.findRecord = cardNumber => Financials.findOne({ where: {cardNumber}});
  Financials.cardHolder = details => Financials.create(details);
  Financials.updateAmount = (amount, cardNumber) => Financials.update(amount,{
    returning: true,
    where: { cardNumber }
  });
  Financials.associate = function(models) {
    // associations can be defined here
  };
  return Financials;
};

export default Financials;